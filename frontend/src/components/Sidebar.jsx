// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiFileText, FiMessageSquare, FiHeart, FiCalendar, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // 获取用户信息并解析邮箱
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email) {
            setUserEmail(user.email);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // 从 localStorage 移除用户信息
        navigate('/'); // 重定向到主页
    };

    return (
        <div className="h-screen w-64 bg-white shadow-md">
            <div className="p-4 flex justify-center items-center cursor-pointer">
                <Link to="/">
                    <img src="src/assets/logo.png" alt="Logo" className="w-20" />
                </Link>
            </div>
            <ul className="space-y-8 p-4">
                <li>
                    <Link to="/dashboard" className="flex items-center text-gray-800 hover:text-blue-500">
                        <FiHome className="mr-3" /> Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/upload" className="flex items-center text-gray-800 hover:text-blue-500">
                        <FiFileText className="mr-3" /> Service
                    </Link>
                </li>

                {/* 根据用户邮箱显示FeedBack菜单项 */}
                {userEmail === 'test@gmail.com' && (
                    <li>
                        <Link to="/applications" className="flex items-center text-gray-800 hover:text-blue-500">
                            <FiMessageSquare className="mr-3" /> FeedBack
                        </Link>
                    </li>
                )}

                <li>
                    <button
                        onClick={handleLogout}
                        className="flex items-center text-gray-800 hover:text-blue-500 w-full text-left"
                    >
                        <FiLogOut className="mr-3" /> Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
