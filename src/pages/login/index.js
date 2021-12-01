import React from 'react';

// import { Container } from './styles';

function LoginPage() {
  return (
    <div>
        <h1>Login Page</h1>
        <form>
            <label>login</label>
            <input type='text' name='login' />
            <label>password</label>
            <input type='password' name='pass' />
        </form>
    </div>);
}

export default LoginPage;