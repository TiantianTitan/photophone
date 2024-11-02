// src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Navbar() {
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove the user from localStorage
        window.location.href = '/'; // Redirect to the front page
    };

    return (
        <nav className="bg-white border-b border-blue-200">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="src/assets/logo.png" alt="Logo" className="w-18 h-11" />
                </div>
                <div className="hidden md:flex space-x-8">

                         <div className="flex space-x-8">
                                <Link to={`/`} className="text-gray-600 hover:text-blue-600">Accueil</Link>
                                <Link to={`${user?.role == 'STUDENT' ? '/offers' : '/login'}`} className="text-gray-600 hover:text-blue-600">Service</Link>
                                <Link to={`/contact`} className="text-gray-600 hover:text-blue-600">Contact</Link>
                            
                        </div>
                </div>
                {!user &&
                    <div className="flex space-x-4">
                        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:underline">Prendre une photo</Link>
                    </div>
                }
                {user &&
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={handleLogout}
                        >Logout</button>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Navbar;
