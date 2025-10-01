import { useEffect, useMemo, useState } from "react";
import { Button, Form, Image, Input, Modal, Pagination, Select, Table, Upload } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { uploadImage } from "../until/cloudinary";
import { UploadOutlined } from "@ant-design/icons";

type ProductStatus = "active" | "inactive";

type ProductRow = {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
};

export default function Products() {
  const [rows, setRows] = useState<ProductRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);

  // Fetch API
  useEffect(() => {
    axios.get("http://localhost:4000/products").then(res => setRows(res.data));
  }, []);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<ProductRow> = [
    { title: "Mã", dataIndex: "code", key: "code" },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Danh mục", dataIndex: "category", key: "category" },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>Sửa</Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>Xóa</Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: ProductRow) {
    setEditing(row);
    setOpen(true);
  }

  async function onDelete(id: string) {
    await axios.delete(`http://localhost:4000/products/${id}`);
    setRows(rows.filter(r => r.id !== id));
  }

  interface ProductFormValues {
    code: string;
    name: string;
    category: string;
    price: number | string;
    image?: any;
    status: ProductStatus;
  }

  async function onSubmit(values: ProductFormValues) {
    let imageUrl = editing?.image || "";
    if (values.image && values.image.file) {
      imageUrl = await uploadImage(values.image.file.originFileObj);
    }

    const next: ProductRow = {
      id: editing?.id ?? uuidv4(),
      code: values.code,
      name: values.name,
      category: values.category,
      price: Number(values.price) || 0,
      image: imageUrl,
      status: values.status,
    };

    if (editing) {
      await axios.put(`http://localhost:4000/products/${editing.id}`, next);
      setRows(rows.map(r => r.id === editing.id ? next : r));
    } else {
      await axios.post("http://localhost:4000/products", next);
      setRows([...rows, next]);
    }
    setOpen(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>Thêm mới</Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as ProductStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table columns={columns} dataSource={paged} pagination={false} rowKey="id" />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form layout="vertical" onFinish={onSubmit} initialValues={editing ?? { status: "active" }}>
          <Form.Item name="code" label="Mã" rules={[{ required: true, message: "Nhập mã" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Tên" rules={[{ required: true, message: "Nhập tên" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Danh mục" rules={[{ required: true, message: "Nhập danh mục" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Giá" rules={[{ required: true, message: "Nhập giá" }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="image" label="Ảnh">
            <Upload listType="picture" beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
            <Select options={[{ value: "active", label: "Hoạt động" }, { value: "inactive", label: "Ngừng" }]} />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">Lưu</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
