import React, { useCallback, useEffect, useState } from 'react'
import './stusubject.css'
import axios from 'axios'

const StuSubject = () => {
    
    const [subjectID, setSubjectID] = useState(0) 
    const [items, setItems] = useState([])
    const [subject, setSubject] = useState({})
    
    
    const getSubjectID = useCallback(
        () => {
                
            axios.get('http://localhost:5000/getsubjectID')
            .then((response) => {
                setSubjectID(response.data.id)
            })
            
        }, []
    )
    
    const getItems = useCallback(
        () => {
        
            axios.get(`http://localhost:5000/getItems/${subjectID}`)
            .then((response) => {
                setItems(response.data)
            })
            
        }, [subjectID]
    )
    
    
    const getSubject = useCallback(
        () => {
        
            if(subjectID){
                axios.get(`http://localhost:5000/doctor/getSubject/${subjectID}`)
                .then((response) => {
                     setSubject(response.data)
                })
            }
    
        }, [subjectID]
    )
    
    
    
    useEffect(() => {
        getSubjectID()
        getItems()
        getSubject()
    }, [getSubjectID, getItems, getSubject, items])
    
    
    
    
    let itemsShow = items.length? items.map((item) => {
        return (
            <div key={item._id} className='item'>
                <a href={item.url} target='_blank' rel='noreferrer'>{item.name}</a>
            </div>
        )
    }): <p className='empty'>no items yet</p> 
    
    
    
  return (
    <div className='items_cont'>
        
        <h1 className='subject_name'>{subject.name}</h1>
        
        <div className='subject_items'>
            {itemsShow}
        </div>
              
    </div>
  )
}

export default StuSubject
