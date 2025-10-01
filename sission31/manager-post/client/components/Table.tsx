import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    image: string;
    date: string;
    status: string;
}

interface TableProps {
    data: Post[];
}

function Table({ data }: TableProps) {
    if (data.length === 0) return <div>Không có dữ liệu</div>;

    return (
        <div style={{ margin: "20px", overflowX: "auto", width: "100%" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th style={thStyle}>STT</th>
                        <th style={thStyle}>Tiêu đề</th>
                        <th style={thStyle}>Hình ảnh</th>
                        <th style={thStyle}>Ngày viết</th>
                        <th style={thStyle}>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td style={tdStyle}>{index + 1}</td>
                            <td style={tdStyle}>{item.title}</td>
                            <td style={tdStyle}>
                                <img src={item.image} alt={item.title} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                            </td>
                            <td style={tdStyle}>{item.date}</td>
                            <td style={tdStyle}>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


const thStyle: React.CSSProperties = {
    padding: "12px",
    border: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
    padding: "12px",
    border: "1px solid #ddd",
};

const btnStyle: React.CSSProperties = {
    border: "none",
    padding: "6px 12px",
    margin: "0 2px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    color: "white",
};

export default Table;
