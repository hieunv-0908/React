import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeUser } from "./FakeUser";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (
            email === fakeUser.email &&
            password === fakeUser.password &&
            role === fakeUser.role
        ) {
            localStorage.setItem("isAuth", "true");
            navigate("/account");
        } else {
            setError("Thông tin đăng nhập không chính xác!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[100%] min-w-[100%] bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Đăng nhập
                </h2>

                <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">-- Chọn quyền --</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>

                <button
                    onClick={handleLogin}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Đăng nhập
                </button>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </div>
        </div>
    );
}
