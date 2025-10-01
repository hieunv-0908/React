import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import ReactMarkdown from "react-markdown";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: string;
  content: string;
}

function App() {
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  // Lấy dữ liệu ban đầu
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get<Post[]>("http://localhost:3000/post");
    setPosts(res.data);
  };

  // Thêm bài viết
  const handleAddPost = async () => {
    const newPost: Omit<Post, "id"> = {
      title,
      image: file ? URL.createObjectURL(file) : "", // demo, thực tế nên upload cloud
      date: new Date().toLocaleDateString(),
      status: "Đã xuất bản",
      content,
    };

    await axios.post("http://localhost:3000/post", newPost);
    fetchPosts();
    setOpened(false);
    setTitle("");
    setFile(null);
    setContent("");
    setMainContent("");
  };

  // Tìm kiếm + lọc
  const filteredPosts = posts
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (filter === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

  return (
    <div
      style={{
        width: "1000px",
        boxShadow: "1px 1px 2px 2px gray",
        borderRadius: "8px",
        minHeight: "600px",
        padding: "30px",
      }}
    >
      <Header
        onAddClick={() => setOpened(true)}
        onSearch={setSearch}
        onFilter={setFilter}
      />

      <Table data={filteredPosts} />

      {opened && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "600px",
              borderRadius: "12px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h2>Thêm mới bài viết</h2>

            <label>
              <h6>Tiêu đề</h6>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: "95%",
                  margin: "5px 0 15px 0",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
            </label>

            <label>
              <h6>Hình ảnh</h6>
              <input
                type="file"
                onChange={(e) =>
                  setFile(e.target.files ? e.target.files[0] : null)
                }
              />
            </label>

            <label>
              <h6>Nội dung</h6>
              <div style={{ display: "flex", gap: "8px" }}>
                <textarea
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                    setMainContent(e.target.value);
                  }}
                  style={{
                    flex: 1,
                    minHeight: "200px",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
                <div
                  style={{
                    width: "50%",
                    minHeight: "200px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    overflow: "auto",
                  }}
                >
                  <ReactMarkdown>{mainContent}</ReactMarkdown>
                </div>
              </div>
            </label>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setOpened(false)}>Hủy</button>
              <button
                onClick={handleAddPost}
                style={{ background: "#4cafef", color: "white", padding: "8px 14px", border: "none", borderRadius: "6px" }}
              >
                Xuất bản
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
