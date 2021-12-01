import React, {useState} from 'react';

function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleSubmit = () => {
        //verifica autenticacao

        //se autenticado
        localStorage.setItem('role', userRole)
        localStorage.setItem('token', true)

        navigate('/logged')

    }

    return (
        <div style={{
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column'}}>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>login</label>
                <input type='text' name='login' value={name} onChange={(e) => setName(e.target.value)}/>
                <label>password</label>
                <input type='password' name='pass' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>);
}

export default LoginPage;