// LoginForm.jsx

import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, for example, send data to a backend API
    console.log('Logging in with data:', formData);
  };

  const handleOtpLogin = () => {
    // Add your OTP login logic here
    console.log('Logging in via OTP');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>

      <div>
        <p>Login via OTP:</p>
        <button onClick={handleOtpLogin}>Login Via OTP</button>
      </div>
    </div>
  );
};

export default LoginForm;
