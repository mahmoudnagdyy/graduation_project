import React, { useRef, useState } from 'react'
import Header from './../Header/Header';
import './doctor.css'
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Doctor = () => {
    
    
  return (
    <div className='doctor_bigCont'>
        <Header/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default Doctor
