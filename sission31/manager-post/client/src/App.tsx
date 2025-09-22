import React, { useState } from 'react'
import Header from '../components/Header'
import Table from "../components/Table"
import ReactMarkdown from 'react-markdown'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [opened, setOpened] = useState(false)
  const [conten, setContent] = useState("")
  const [mainContent, setMainContent] = useState("");
  const handleOpened = (status: boolean) => {
    setOpened(status)
  }

  return (
    <div style={{ width: '800px', boxShadow:'1px 1px 2px 2px gray',borderRadius:'8px', height:'400px',padding:'30px'}}>
      <Header onAddClick={() => handleOpened(true)} />
      <Outlet />

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
              width: "500px",
              borderRadius: "12px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              padding: "20px",
              animation: "fadeIn 0.3s ease",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: 0 }}>Thêm mới bài viết</h2>
              <span
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={() => handleOpened(false)}
              >
                ☓
              </span>
            </div>

            {/* Body */}
            <div
              style={{
                padding: "10px",
                borderRadius: "8px",
                background: "#fafafa",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              {/* Tên bài viết */}
              <label>
                <h6 style={{ margin: "5px 0" }}>Tên bài viết</h6>
                <input
                  type="text"
                  style={{
                    width: "95%",
                    margin: "5px 0 15px 0",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </label>

              {/* Hình ảnh */}
              <label>
                <h6 style={{ margin: "5px 0" }}>Hình ảnh</h6>
                <input
                  type="file"
                  style={{
                    width: "95%",
                    margin: "5px 0 15px 0",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </label>

              {/* Nội dung */}
              <label>
                <h6 style={{ margin: "5px 0" }}>Nội dung</h6>
                <div style={{ display: "flex", gap: "8px" }}>
                  <textarea
                    value={conten}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      setContent(e.target.value);
                      setMainContent(e.target.value);
                    }}
                    style={{
                      flex: 1,
                      minHeight: "300px",
                      padding: "8px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      resize: "vertical",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    }}
                  />
                  <div
                    style={{
                      width: "50%",
                      minHeight: "300px",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      overflow: "auto",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <ReactMarkdown>{mainContent}</ReactMarkdown>
                  </div>
                </div>
              </label>
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "10px",
                paddingTop: "10px",
                borderTop: "1px solid #eee",
                boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <button
                style={{
                  background: "#eee",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                Làm mới
              </button>
              <button
                style={{
                  background: "#4cafef",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                }}
              >
                Xuất bản
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
