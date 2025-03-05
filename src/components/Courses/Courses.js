import React, { useCallback, useEffect, useState } from 'react'
import './courses.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Courses = () => {
  
  const [subjects, setSubjects] = useState([])
  const [user, setUser] = useState({})
  
  
  const addOpenedSubject = (id) => {
        
    axios.patch('http://localhost:5000/doctor/openedSubject', {id})
    .then((response) => {
        console.log(response.data)
    })
    
}
  
  
  const getLogedUSer = () => {
    axios.get('http://localhost:5000/getLoginUser')
    .then(res => {
      setUser(res.data)
    })
  }
  
  const getCourses = useCallback(
    () => {
    
      if(user.level){
        axios.get(`http://localhost:5000/Student/Courses/${user.level}`)
        .then(res => {
          setSubjects(res.data)
          console.log(res.data);
        })
      }
      
    }, [user.level])
  
  
  useEffect(() => {
    getLogedUSer()
    getCourses()
  }, [getCourses])
  
  
  let coursesShow = subjects.length ? subjects.map((subject) => {
    
    return (
      <div key={subject.id} className='subj_item'>
        <Link to={`${subject.name}`} onClick={() => addOpenedSubject(subject.id)}>{subject.name}</Link>
      </div>
    )
  }) : <p className='empty'>no courses yet</p>
  
  
  
  return (
    <div className='courses_cont'>
      <h1 className='welcome_courses'>Welcome Student</h1>
        
        <div className='items_cont'>
          {coursesShow}
        </div>
      
        
        
    </div>
  )
}

export default Courses
