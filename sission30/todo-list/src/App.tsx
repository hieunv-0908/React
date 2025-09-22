import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import axios from "axios";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteAllTaskCompledted = async () => {
    if (!window.confirm("Bạn có chắc muốn xóa task này không?")) return;
    try {
      const completedTasks = tasks.filter(t=>t.completed)
      setTasks(tasks.filter(t => !t.completed));
      completedTasks.forEach(t=>axios.delete(`http://localhost:8080/tasks/${t.id}`))
    } catch (error) { console.error(error); }
  }


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, [setTasks]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      gap: "5px",
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
    }}>
      <Header />
      <InputTask tasks={tasks} setTasks={setTasks} />
      <div style={{ display: "flex", gap: '10px' }}>
        <NavLink to={"/"}>Tất cả</NavLink>
        <NavLink to={"working"}>Đang làm</NavLink>
        <NavLink to={"completed"}>Hoàn thành</NavLink>
      </div>
      <Outlet context={{ tasks, setTasks }} />
      <div>
        <button>Xoá tất cả</button>
        <button onClick={deleteAllTaskCompledted}>Xoá công việc đã hoàn thành</button>
      </div>
    </div>
  );
}

export default App;