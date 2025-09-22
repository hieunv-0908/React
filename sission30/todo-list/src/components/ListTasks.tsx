import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import type { Task } from "../App";

function ListTasks() {
    const { tasks, setTasks } = useOutletContext<{ tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>> }>();
    const [loading, setLoading] = useState(true);
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editText, setEditText] = useState("");

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;
        try {
            await axios.patch(`http://localhost:8080/tasks/${id}`, { completed: !task.completed });
            setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
        } catch (error) { console.error(error); }
    }

    const deleteTask = async (id: string) => {
        if (!window.confirm("Bạn có chắc muốn xóa task này không?")) return;
        try {
            await axios.delete(`http://localhost:8080/tasks/${id}`);
            setTasks(tasks.filter(t => t.id !== id));
        } catch (error) { console.error(error); }
    }

    const startEditing = (id: string, text: string) => {
        setEditingTaskId(id);
        setEditText(text);
    }

    const saveEdit = async (id: string) => {
        try {
            await axios.patch(`http://localhost:8080/tasks/${id}`, { text: editText });
            setTasks(tasks.map(t => t.id === id ? { ...t, text: editText } : t));
            setEditingTaskId(null);
            setEditText("");
        } catch (error) { console.error(error); }
    }

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get("http://localhost:8080/tasks");
                setTasks(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };
        fetchTasks();
    }, [setTasks]);


    if (loading) {
        return <p style={{ textAlign: "center" }}>⏳ Đang tải dữ liệu...</p>;
    }

    return (
        <div style={{ width: "95%", display: "flex", flexDirection: "column", gap: "10px", maxHeight: "400px", overflowY: "auto" }}>
            {tasks.map(task => (
                <div key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderRadius: "6px", backgroundColor: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                        {editingTaskId === task.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                onBlur={() => saveEdit(task.id)}
                                onKeyDown={e => e.key === "Enter" && saveEdit(task.id)}
                                autoFocus
                                style={{ padding: "4px 6px", border: "1px solid #ccc", borderRadius: "4px" }}
                            />
                        ) : (
                            <span style={{ textDecoration: task.completed ? "line-through" : "none"   , color: task.completed ? "#999" : "#000" }}>{task.text}</span>
                        )}
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={() => startEditing(task.id, task.text)} style={{ border: "none", background: "transparent", color: "#1890FF", cursor: "pointer" }}>✍</button>
                        <button onClick={() => deleteTask(task.id)} style={{ border: "none", background: "transparent", color: "#FF4D4F", cursor: "pointer" }}>✗</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListTasks;
