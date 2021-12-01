import React from 'react';

// import { Container } from './styles';

function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
        <h1>Login Page</h1>
        <form >
            <label>login</label>
            <input type='text' name='login' value={name} onChange={(e) => setName(e.target.value)}/>
            <label>password</label>
            <input type='password' name='pass' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>);
}

export default LoginPage;