import { Button } from '@material-ui/core'
import { auth, provider} from './firebaseApp';

import React from 'react'
import './Login.css'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }


    return (
        <div className='login'>
            <div className="login_logo">
                <h1>Interact!</h1>
                <img src="" alt="" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
