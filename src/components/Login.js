import React from 'react';
import "../css/login.css";
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { signin } from '../features/counter/useSlice';

function Login() {
    const dispatch=useDispatch();
    const login = ()=> {
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(signin({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            }))
        }).catch(error=>{
            alert(error)
        })
    };
  return (
    <div className='loginwrapper'>
       <div className='login-page'>
        <div>
            <img src="https://lh3.googleusercontent.com/PWXM4hp9lRRezHTV86SqLwhRQMz4_Lk08jll3GkWBvBZy_Uk6kvUvwIrVilwaIW2mHZJoccchG6o9a5UdOJEwQPf9oJGmOGSglo3VW0=rw-e365-w2880" alt="loading..." style={{ width: '660px', height: '450px' }} />
        </div>
        <div>
        <div >
            <h1 className='about-w'>Gmail<br/>Your secure <br/>and reliable email <br/>service <br/>for personal and professional communication</h1>
        </div>
        {/* <div><span><h1>Get Started With Gmail</h1></span></div> */}
        <button className='gmail_login' onClick={login} style={{fontFamily:'monospace'}}>Login with Gmail</button>
        </div>
        </div>
        
    </div>
  )
}

export default Login