import React from 'react'

interface HeaderProps {
  onAddClick: () => void;
  onSearch: (value: string) => void;
  onFilter: (value: string) => void;
}

function Header({ onAddClick, onSearch, onFilter }: HeaderProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm"
          onChange={(e) => onSearch(e.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
            width: "240px",
          }}
        />
        <select
          onChange={(e) => onFilter(e.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
            backgroundColor: "white",
          }}
        >
          <option value="">Lọc bài viết</option>
          <option value="newest">Mới nhất</option>
          <option value="oldest">Cũ nhất</option>
        </select>
      </div>
      <button
        onClick={onAddClick}
        style={{
          backgroundColor: "#2e7dff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          fontSize: "14px",
        }}
      >
        Thêm mới bài viết
      </button>
    </div>
  );
}


export default Header
