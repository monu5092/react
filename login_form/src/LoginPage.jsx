import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register'); 
  };

  return (
    <div className="login">
      <h2>Login-Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="username">UserName</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
