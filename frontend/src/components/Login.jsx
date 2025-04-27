import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('http://localhost:8080/login', {
          email,
          password,
        });
    
        if (response.status === 200) {
          setSuccess('Вы успешно вошли!!');
          setError('');
        } else {
          setError('ошибка входа');
          setSuccess('');
        }
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.error || err.message || 'Ошибка при регистрации');
        setSuccess('');
      }
    };
  
    return (
      <div>
        <NavBar />
        <div className='container mt-5'><h1>Login</h1></div>
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
  
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  };

export default Login