/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [userAuthenticate, setUserAuthenticate] = useState(false);
    const [userRole, setUserRole] = useState(0)

    let navigate = useNavigate();

    useEffect(() => {
        setUserAuthenticate(localStorage.getItem('isAuthenticated'));
        setUserRole(localStorage.getItem('role'));
    }, [userAuthenticate]);

    return (
        userAuthenticate === 'true' ? 
            (<div style={{
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column'}}>
                <h1>Normal user content</h1>
                {
                    userRole === '1' && (
                        <h1>
                            Admin user content
                        </h1>
                    )
                }
            </div>) :
            (<div>
                <h1>Please authenticate before access this page</h1>
                <button onClick={() => {
                    navigate('/'); 
                    localStorage.setItem('isAuthenticated', false);
                }
            }>Login page</button>
            </div>)    
    );
}

export default Home;