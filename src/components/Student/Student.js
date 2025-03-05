import React from 'react'
import './student.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Student = () => {
  return (
    <div className='student_cont'>
        <Header type={'Student'} />
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Student
