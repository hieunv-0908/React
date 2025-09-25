import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
  id: string;
  taskName: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false); 
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });

  const API_URL = 'http://localhost:8080/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error('Lỗi khi fetch tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (title: string, priority: 'low' | 'medium' | 'high') => {
    const newTask = {
      id: Date.now().toString(),
      taskName: title,
      completed: false,
      priority,
    };
    setLoading(true);
    try {
      await axios.post(API_URL, newTask);
      fetchTasks();
    } catch (error) {
      console.error('Lỗi khi thêm task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    setLoading(true);
    try {
      await axios.patch(`${API_URL}/${id}`, { completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error('Lỗi khi toggle:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Lỗi khi xóa:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === 'all' ||
      (filters.status === 'completed' && t.completed) ||
      (filters.status === 'active' && !t.completed);

    const matchPriority =
      filters.priority === 'all' || t.priority === filters.priority;

    const matchSearch = t.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      <TaskForm onAdd={handleAdd} />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      {loading ? (
        <p className="text-center text-gray-600 mt-4">Đang tải...</p>
      ) : (
        <div>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.taskName}
                completed={task.completed}
                priority={task.priority}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">Không có công việc nào</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
