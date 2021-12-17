import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
        <div>
            <p>Login page</p>
            <Link to="/dashboard">
                Dashboard page
            </Link>
        </div>
  );
};

export default Login;
