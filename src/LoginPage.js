import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = () => {
    
    if (password === '123456') {
      onLogin();
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-container">
      <h1>TrackXpress</h1>
      <div className="image-container">
        <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/banner-tracking.png" alt="Banner" />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
