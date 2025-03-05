import React, { useEffect, useRef, useState } from 'react'
import './profile.css'
import axios from 'axios'

const Profile = () => {
  
  const [eye, setEye] = useState(false)
  const [user, setUser] = useState({})
  const [passUpdate, setPassUpdate] = useState(false)
  
  const [passError, setPassError] = useState(0)
  
  
  const oldPass = useRef()
  const newPass = useRef()
  const confirmNewPass = useRef()
  
  const getLoginUser = () => {
    
    axios.get('http://localhost:5000/getLoginUser')
    .then(response => {
      setUser(response.data)
    })
    
  }
  
  
  const updataPassword = (password) => {
    
    axios.patch(`http://localhost:5000/updatePassword/${user.email}`, {password})
    
  }
  
  
  
  const saveHandler = () => {
    const oldPassVal = oldPass.current.value;
    const newPassVal = newPass.current.value;
    const confirmNewPassVal = confirmNewPass.current.value
    
    setPassError(0)
    
    if(oldPassVal !== user.password){
      setPassError(1)
    }
    
    else if(newPassVal === oldPassVal){
      setPassError(2)
    }
    
    else if(!newPassVal.length){
      setPassError(2)
    }
    
    else if(!confirmNewPassVal.length){
      setPassError(3)
    }
    
    else if(newPassVal !== confirmNewPassVal){
      setPassError(3)
    }
    
    else {
      updataPassword(newPassVal);
      setPassUpdate(false)
    }
    
    
  }
  
  useEffect(() => {
    getLoginUser()
    
  }, [user])
  
  
  return (
    <div className='profile_cont'>
      
      {passUpdate ? 
      
        <div  className='updataPass_cont'>
          
          <button className='close_btn' onClick={() => setPassUpdate(false)}><i class="fa-solid fa-xmark"></i></button>
          
          <div className='updata_password'>
            <h1>Update Password</h1>
            <input type='password' placeholder='Current Password' ref={oldPass}/>
            {passError === 1? <p className='oldPassError'><i class="fa-solid fa-xmark"></i> Incorrect Password</p> : null}
            <div className='password_cont'>
                  <input type={eye ? 'text' : 'password'} placeholder='New Password' ref={newPass}/>
                  <button className='eye_btn' onClick={()=> setEye(!eye)}>
                      <i class={eye ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                  </button>
            </div>
            {passError === 2? <p className='oldPassError'><i class="fa-solid fa-xmark"></i> Please Enter New Password</p> : null}
              

            <input type='password' placeholder='Confirm New Password' ref={confirmNewPass}/>
            {passError === 3? <p className='oldPassError'><i class="fa-solid fa-xmark"></i> Please Enter The Same New Password</p> : null}
            
            <button className='save_btn' onClick={saveHandler}>Save</button>
          </div>
          
        </div> : null
      }
      
      <div className='userInfo_cont'>
        
        {user? 
            
            <>
            
                <h1 className='user_name'>name: <span>{user.name}</span></h1>
                <h1 className='user_email'>email: <span>{user.email}</span></h1>
                <div className='password_cont'>
                  <h1 className='user_password'>password: <span>{user.password}</span></h1>
                  <button className='edit_btn' title='Change Password' onClick={() => setPassUpdate(true)}><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
                <h1 className='user_type'>iD: <span>{user.userID}</span></h1>
                <h1 className='user_type'>type: <span>{user.type}</span></h1>
                <h1 className='user_type'>department: <span>{user.department}</span></h1>
                {user.level ? <h1 className='user_level'>level: <span>{user.level}</span></h1> : null}
            
            </> : null
            
        }
        
      </div>
      
    </div>
  )
}

export default Profile
