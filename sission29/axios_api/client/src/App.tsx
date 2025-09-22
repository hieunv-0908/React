import React, { useEffect } from "react";
import axios from "axios";
import type { Student } from "./student"; 

const API_URL = "http://localhost:3000/students";

const getAllStudent = async (): Promise<Student[] | void> => {
  try {
    const response = await axios.get<Student[]>(API_URL);
    console.log("Danh sách sinh viên: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sinh viên:", error);
  }
};

// get student by id
const getStudentById = async (id: number): Promise<Student | void> => {
  try {
    const response = await axios.get<Student>(`${API_URL}/${id}`);

    if (response.data) {
      console.log("Thông tin sinh viên:", response.data);
      return response.data;
    } else {
      console.log("Không tìm thấy bản ghi");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      console.log("Không tìm thấy bản ghi");
    } else {
      console.error("Lỗi khi lấy thông tin sinh viên:", error);
    }
  }
};

// create student using fetch
const createStudent = async (student: Omit<Student, "id">): Promise<Student | void> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    if (!response.ok) {
      throw new Error("Failed to create student");
    }

    const data: Student = await response.json();
    console.log("Kết quả trả về từ server:", data);
    return data;
  } catch (error) {
    console.error("Lỗi khi thêm sinh viên:", error);
  }
};

const App: React.FC = () => {
  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>Quản lý sinh viên</h3>
        <button
          style={{
            backgroundColor: "#2ecc71",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          + Thêm mới sinh viên
        </button>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <input type="checkbox" />
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Tên sinh viên
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Email
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Địa chỉ
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Số điện thoại
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Lựa chọn
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <input type="checkbox" />
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Nguyễn Văn A
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              anv@mail.com
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Thanh Xuân, Hà Nội
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              (+84) 631 2097
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#f39c12",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                ✏️
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#e74c3c",
                  cursor: "pointer",
                }}
              >
                🗑️
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <input type="checkbox" />
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Nguyễn Văn B
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              bnv@mail.com
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Thành phố Hồ Chí Minh
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              (+84) 631 2097
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#f39c12",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                ✏️
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#e74c3c",
                  cursor: "pointer",
                }}
              >
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          borderTop: "1px solid #ddd",
        }}
      >
        <span>Hiển thị 5/10 bản ghi</span>
        <div>
          <button style={{ margin: "0 4px" }}>Trước</button>
          <button style={{ margin: "0 4px" }}>1</button>
          <button style={{ margin: "0 4px", backgroundColor: "#3498db", color: "#fff" }}>
            2
          </button>
          <button style={{ margin: "0 4px" }}>3</button>
          <button style={{ margin: "0 4px" }}>Sau</button>
        </div>
      </div>
    </div>
  );
};

export default App;
