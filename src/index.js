import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/Login/Login';
import Student from './components/Student/Student';
import Courses from './components/Courses/Courses';
import { Provider } from 'react-redux';
import Store from './components/Store/Store';
import Doctor from './components/Doctor/Doctor';
import Profile from './components/Profile/Profile';
import DocHome from './components/DocHome/DocHome';
import Subject from './components/Subject/Subject';
import StuSubject from './components/StuSubject/StuSubject';
import { Grades } from './components/Grades/Grades.js';

var router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {index: true, element: <Login/>},
        {
          path: "Student", 
          element: <Student/>,
          children:[
            {index:true, element: <Courses />,},
            {path:'Grades', element: <Grades/>},
            {path:'Profile', element: <Profile/>},
            {path: ':name', element: <StuSubject/>}
          ]
        },
        {
          path: 'Doctor', 
          element: <Doctor/>, 
          children:[
            {index:true, element: <DocHome/>},
            {path:'Profile', element: <Profile/>},
            {path: ':name', element: <Subject/>}
        ]
      },
      ]
    },
    
    

  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <Provider store={Store}>
      <App />
      <RouterProvider router={router}/>
    </Provider>
  
  
  </>
);


reportWebVitals();
