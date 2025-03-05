import React, { useEffect, useRef, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export function Login() {
    
    var [eye, setEye] = useState(false)
    const [user, setUser] = useState({})
    
    var navigate = useNavigate();
    
    var [mailcheck,setmailcheck] = useState(2);
    var [passcheck,setpasscheck] = useState(2);
    var [typecheck,setTypecheck] = useState(2);
    
    var email = useRef(null)
    var password = useRef(null)
    var select = useRef(null)
    
    
    const getUser = (mail) => {
        
        if (mail){
            axios.get(`http://localhost:5000/getUser/${mail}`)
            .then((response) => {
                setUser(response.data)
            })
        }
        
    }
    
    const addLoginUSer = (mail) => {
        
        if(mail){
            axios.post('http://localhost:5000/LoginUser',{email: mail})
            .then((response) => {
                console.log(response.data)
            })
        }
        
        
    }
    
    
    const handleLogin = () => {
        
        const mail = email.current.value
        const pass = password.current.value
        const type = select.current.value
        
                    
        getUser(mail)
        
        setmailcheck(true)
        setpasscheck(true)
        setTypecheck(true)
        
        if(user.email !== mail){
            setmailcheck(false)
        }
        
        else if(user.password !== pass){
            setpasscheck(false)
        }
        
        else if(user.type!== type){
            setTypecheck(false)
        }
        
        else{
            addLoginUSer(mail)
            navigate(user.type)
        }

    }
    
    
  return (
    <div className='login_container'>
        <h1 className='loginTxt'>login<span>.</span></h1>
        
        <div className='mail_cont'>
            <input type='email' placeholder='Email' ref={email} onChange={() => getUser(email.current.value)}/>
            {mailcheck === false? <p>
                <i class="fa-solid fa-xmark"></i> Email Not Found
            </p> : null}
        </div>
        
        <div className='pass_bigCont'>
            <div className='password_cont'>
                <input type={eye ? 'text' : 'password'} placeholder='Password' ref={password}/>
                <button className='eye_btn' onClick={()=> setEye(!eye)}>
                    <i class={eye ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                </button>
            </div>
            
            {passcheck === false ? <p className='pass_p'>
                <i class="fa-solid fa-xmark"></i> Please Enter Correct Password
            </p>: null}
        </div>
        
        
        <div className='type_cont'>
            
            <select ref={select}>
                <option value={'Student'}>Student</option>
                <option value={'Doctor'}>Doctor</option>
            </select>
            
            {typecheck === false ? <p className='type_p'>
                        <i class="fa-solid fa-xmark"></i> Type Is Not Correct
                </p>: null}
        </div>
        
            
                
        
        <button className='loginBtn' onClick={handleLogin}>Login</button>
    </div>
  );
}