import React, { useEffect, useState } from 'react'
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Header = ({type}) => {
    
    const nav = useNavigate()
    
    const [date, setDate] = useState('')
    
    
    const logoutHandler = () => {
      
        axios.patch('http://localhost:5000/logout')
        .then((response) => {
          console.log(response.data);
          
        })
      
    }
    
    
    useEffect(()=> {
      const today = new Date();
    
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      
      setDate(day + '/' + month + '/' + year)
      
    },[])
    
  return (
    <header className='header_cont'>
      { type === 'Student' ? <div className='header_links'>
            <NavLink to={'/Student'} className={"courseslink"}>courses</NavLink>
            <NavLink to={'Grades'} className={"gradeslink"}>grades</NavLink>
            <NavLink to={'Profile'} className={"profilelink"}>profile</NavLink>
        </div> 
        
        : 
        
        <div className='header_links'>
          <NavLink to={'/Doctor'} className={"homelink "}>home</NavLink>
          <NavLink to={'Profile'} className={"profilelink"}>profile</NavLink>
        </div>
        }
        
        <p className='date'>{date}</p>
        
        <button className='logout' onClick={()=> {nav('/'); logoutHandler()}}>logout</button>
        
    </header>
  )
}

export default Header


