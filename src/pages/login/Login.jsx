import React, {useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Login = () => {

    const google = window.google;

    function handleCallbackResponse(response){
        
        const userObj = jwtDecode(response.credential)
        console.log(userObj);
        
        window.location.assign('https://rick-and-morty-api-v6u4.vercel.app/heroes/');
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "32978081012-1nvlnnsmg7vj0nq88ms6pu7387k1h1di.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline", size: "large"
            }
        )
    }, [])

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh"
        }}>
            <div id="signInDiv"></div>
        </div>
    )
}

export default Login