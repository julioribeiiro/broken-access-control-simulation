import React, { useEffect, useState } from 'react';

function Home() {
    const [userRole, setUserRole] = useState(0)

    useEffect(() => {
        // setUserRole(localStorage.getItem('role'));
    }, [])

    return (
        <div style={{
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column'}}>
            <h1>Normal user content</h1>
            {
                userRole === 1 && (
                    <h1>
                        Admin user content
                    </h1>
                )
            }
        </div>
    );
}

export default Home;