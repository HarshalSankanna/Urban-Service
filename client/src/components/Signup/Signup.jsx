import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

import SignupImg from '../../assets/login.jpg';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate to access navigation object

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5555/signup', {
                name: username,
                email,
                password,
            });
            
            console.log(response.data); // Log the response from the server
            // const result = await response.json()
            // if(!response.ok) alert(result.message)
            navigate('/login'); 

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={SignupImg} alt="" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>Urban Services</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input className='border p-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Set Password</label>
                        <input className='border p-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                    <button type="submit" className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign Up</button>
                    <div className='flex justify-between'>
                        <Link to="/login" className="hover:underline">Back to Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
