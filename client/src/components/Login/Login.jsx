import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import loginImg from '../../assets/login.jpg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5555/login', {
                email,
                password,
            });
            console.log(response.data);
            navigate('/'); // Assuming '/dashboard' is the route to redirect to after login
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>Urban Services</h2>
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input className='border p-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                    <div className='flex justify-between'>
                        <Link to="/signup" className="hover:underline">Create an Account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
