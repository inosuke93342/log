import React, { useState } from 'react';

const Auth = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (endpoint) => {
        try {
            const response = await fetch(`http://localhost:5000/auth/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(endpoint === 'signup' ? 'Signup successful!' : 'Login successful!');
                console.log('Token:', data.token); // For login, display the token (store it securely in production).
            } else {
                setMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            setMessage('Error: Unable to connect to the server');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Auth Component</h2>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={() => handleFormSubmit('signup')}>
                    Signup
                </button>
                <button type="button" onClick={() => handleFormSubmit('login')}>
                    Login
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Auth;
