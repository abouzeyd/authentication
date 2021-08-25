import React from 'react';
// import fire from '../config/fire';

const Login = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    //   fire.auth().
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <p>hello</p>
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
