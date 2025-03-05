import React, { useRef, useState, useEffect, useCallback } from 'react'
import './dochome.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DocHome = () => {
    
    const [user, setUser] = useState({})
    
    const [subjok, setSubjokOk] = useState(true)
    const [levelok, setLevelOk] = useState(true)
    
    const subjName = useRef('')
    const subjlevel = useRef('')
    
    
    const [subjects, setSubjects] = useState([])
    const [subject, setSubject] = useState({})
    const [response, setResponse] = useState('')
    
    const [updateShow, setUpdateShow] = useState(false)
    const [subjectID, setSubjectID] = useState(0)
    
    
    const getLoginUser = () => {
        
        axios.get('http://localhost:5000/getLoginUser')
        .then(response => {
            setUser(response.data)
        })
        
    }
    
    
    const addSubject = (subjName, subjlevel, userId) => {
        
        axios.post('http://localhost:5000/doctor/addSubject', {subjectName: subjName, subjectLevel: subjlevel, userID: userId})
        .then((response) => {
            console.log(response.data);
            setResponse(response.data.message)
            const x = window.setTimeout(() => {
                setResponse('')
                window.clearTimeout(x)
            }, 2000)
        })
        
    }
    
    const getSubjects = useCallback(
        () => {
        
            axios.get(`http://localhost:5000/doctor/getSubjects/${user.id}`)
            .then((response) => {
                setSubjects(response.data)
            })
            
        }, [user.id]
    )
    
    
    const addSubjectHandler = () => {
        
        const subj = subjName.current.value
        const level = subjlevel.current.value
        
        setLevelOk(true)
        setSubjokOk(true)
        
        if(subj.length < 2){
            setSubjokOk(false)
        }
        
        else if(level === 'null'){
            setLevelOk(false)
        }
        
        else{
            addSubject(subj, level, user.id)
            getSubjects()
            subjName.current.value = ''
            subjlevel.current.value = 'null'
        }
        
    }
    
    
    const deleteSubject = (subjID) => {
        
        console.log(subjID);
        
        
        axios.delete(`http://localhost:5000/doctor/deleteSubject/${subjID}`)
        .then((response) => {
            getSubjects()
            console.log(subjID, response.data);
        })
        
    }
    
    const updateSubject = (name, level, subjID) => {
        
        axios.put(`http://localhost:5000/doctor/updateSubject/${subjID}`, {name, level})
        .then((response) => {
            
        })
        
    }
    
    const editSubjectHandler = (subjID) => {
        
        const subj = subjName.current.value
        const level = subjlevel.current.value
        
        setLevelOk(true)
        setSubjokOk(true)
        
        if(subj.length < 2){
            setSubjokOk(false)
        }
        
        else if(level === 'null'){
            setLevelOk(false)
        }
        
        else{
            updateSubject(subj, level, subjectID)
            setUpdateShow(false)
            subjName.current.value = ''
            subjlevel.current.value = 'null'
        }
        
        
    }
    
    
    const addOpenedSubject = (id) => {
        
        axios.patch('http://localhost:5000/doctor/openedSubject', {id})
        .then((response) => {
            console.log(response.data)
        })
        
    }
    
    
    
    let subjectsShown = subjects.length > 0 ? subjects.map((subject, id) => {
        
        return (
            <div key={id} className='subj_item'>
                <Link to={`${subject.name}`} onClick={() => addOpenedSubject(subject.id)}>{subject.name + '(' + subject.level  + ')'}</Link>
                
                <div className='btns_cont'>
                    <button title='Edit Subject' onClick={() => {setUpdateShow(true); setSubject(subject); setSubjectID(subject.id);}}><i class="fa-regular fa-pen-to-square"></i></button>
                    <button title='Delete Subject' onClick={() => deleteSubject(subject.id)}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        )
    }) : <p className='empty'>No Subjects Yet</p>
    
    useEffect(() => {
        getLoginUser()
        getSubjects()
        
    }, [subjects, getSubjects, subject, subjectID])
    
    
    
  return (
    <div className='doctor_cont'>
        
        {updateShow ? 
            
            <div  className='updateSubj_cont'>
            
                <button className='close_btn' onClick={() => setUpdateShow(false)}><i class="fa-solid fa-xmark"></i></button>
                
                <div className='update_subj'>
                    
                    <h1>update subject</h1>
                    
                    <div className='input_cont'>
                        <input type="text" placeholder='subject name' defaultValue={subject.name} ref={subjName}/>
                        {subjok === false ? <p><i class="fa-solid fa-xmark"></i> Please Enter Correct Subject Name</p> : null}
                    </div>
                    
                    
                    <div className='select_cont'>
                        <select name='level' required ref={subjlevel}>
                            <option disabled selected value={'null'}>Choose Level</option>
                            <option value={'0'}>0</option>
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                            <option value={'4'}>4</option>
                        </select>
                        
                        {levelok === false ? <p><i class="fa-solid fa-xmark"></i> Please Choose Level</p> : null}
                    </div>
                    
                    <button className='save' onClick={() => editSubjectHandler(subjectID)}>save</button>
                    
                </div>
                
            </div> : null
    
        }
        
        <h1 className='welcome'>Welcome Doctor</h1>
            
            <div className='form'>
                
                <h2>add Subject</h2>
                
                <div className='input_cont'>
                    <input type="text" placeholder='subject name' ref={subjName}/>
                    {subjok === false ? <p><i class="fa-solid fa-xmark"></i> Please Enter Correct Subject Name</p> : null}
                </div>
                
                
                <div className='select_cont'>
                    <select name='level' required ref={subjlevel}>
                        <option disabled selected value={'null'}>Choose Level</option>
                        <option value={'0'}>0</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                    </select>
                    
                    {levelok === false ? <p><i class="fa-solid fa-xmark"></i> Please Choose Level</p> : null}
                </div>
                
                {response ? <p className='res_p'><i class="fa-regular fa-circle"></i> {response}</p> : null}
                
                <button className='add' onClick={addSubjectHandler}>Add</button>
                    
                </div> 
        
        
        <div className='subjs_cont'>
            {subjectsShown}
        </div>
      
    </div>
  )
}

export default DocHome
