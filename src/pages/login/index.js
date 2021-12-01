/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import {db} from '../../firebase';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usersList, setUsersList] = useState([]);
    async function ref() { await db.collection('users').get().then( 
        querySnapshot => {
            querySnapshot.docs.map(doc => {
                console.log('LOG 1', doc.data());
                setUsersList(prev => [...prev, doc.data()]);
                return doc.data();
            });
        }
      );
    };     
    
    useEffect(() => {
        ref();
    },[]);

    let navigate = useNavigate();

    const handleSubmit = () => {
        // verifica autenticacao
        console.log('values', email, password, usersList);

        // se autenticado
        let userValidation = false;
        usersList.forEach((item) => {
            if(item.email === email && item.password === password){
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('role', item.role);
                userValidation = true;
            }
            if(userValidation === false){
                localStorage.setItem('isAuthenticated', false);
            }
        });

        navigate('/logged');

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
                <input type='text' name='login' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>password</label>
                <input type='password' name='pass' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>);
}

export default LoginPage;