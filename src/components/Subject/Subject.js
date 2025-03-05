import React, { useCallback, useEffect, useRef, useState } from 'react'
import './subject.css'
import axios from 'axios'

const Subject = () => {
    
    const name = useRef('')
    const url = useRef('')
    
    const [nameOk, setNameOk] = useState()
    const [urlOk, setUrlOk] = useState()
    const [subjectID, setSubjectID] = useState()
    const [response, setResponse] = useState('')
    const [items, setItems] = useState([])
    const [subject, setSubject] = useState('')
    const [item, setItem] = useState({})
    const [updateShow, setUpdateShow] = useState(false)
    const [user, setUser] = useState({})
    
    
    const getLogedUSer = useCallback(
        () => {
            axios.get('http://localhost:5000/getLoginUser')
            .then(res => {
              setUser(res.data)
            })
        }, []
    )
    
    
    const getSubjectID = useCallback(
        () => {
                
            axios.get('http://localhost:5000/getsubjectID')
            .then((response) => {
                setSubjectID(response.data.id)
            })
            
        }, []
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
    
    
    
    const addItem = (name, url, subjectID) => {
        
        axios.post('http://localhost:5000/addItem', {name, url, subjectID})
            .then((response) => {
                console.log(response.data)
                setResponse(response.data.message)
                const x = window.setTimeout(() => {
                    setResponse('')
                    window.clearTimeout(x)
                }, 2000)
            })
        
        
    }
    
    const getItems = useCallback(
        () => {
        
            axios.get(`http://localhost:5000/getItems/${subjectID}`)
            .then((response) => {
                setItems(response.data)
            })
            
        }, [subjectID]
    )
    
    const deleteItem = (id) => {
        
        axios.delete(`http://localhost:5000/deleteItem/${id}`)
        .then((response) => {
                console.log(response.data)
                setResponse(response.data.message)
                const x = window.setTimeout(() => {
                    setResponse('')
                    window.clearTimeout(x)
                }, 2000)
        })
        
    }
    
    const editItem = () => {
        
        if(item.id){
            axios.put(`http://localhost:5000/editItem/${item.id}`, {name: name.current.value, url: url.current.value})
           .then((response) => {
                setUpdateShow(false)
            })
        }
    }
    
    
    const addItemHandler = () => {
        
        const itemName = name.current.value
        const itemURL = url.current.value
        
        setNameOk(true)
        setUrlOk(true)
        
        if(!itemName.length || itemName.length < 4){
            setNameOk(false)
        }
        
        else if(!itemURL.length){
            setUrlOk(false)
        }
        
        else{
            addItem(itemName, itemURL, subjectID)
            getItems()
            name.current.value = ''
            url.current.value = ''
        }
        
    }
    
    
    const editItemHandler = (id) => {
        const itemName = name.current.value
        const itemURL = url.current.value
        
        
        setNameOk(true)
        setUrlOk(true)
        
        if(!itemName.length || itemName.length < 4){
            setNameOk(false)
        }
        
        else if(!itemURL.length){
            setUrlOk(false)
        }
        
        else{
            editItem()
            setUpdateShow(false)
            getItems()
        }
        
    }
    
    
    useEffect(() => {
        getSubjectID()
        getItems()
        getSubject()
        getLogedUSer()
    }, [getItems, getSubject, getSubjectID, items, getLogedUSer])
    
    
    let itemsShow = items.length ? items.map((item) => {
        return (
            <div key={item._id} className='item'>
                <a href={item.url} target='_blank' rel='noreferrer'>{item.name}</a>
                <div className='btns_cont'>
                    <button title='Edit Item' onClick={() => {setItem(item); setUpdateShow(true);}}><i class="fa-regular fa-pen-to-square"></i></button>
                    <button title='Delete Item' onClick={() => {deleteItem(item.id); getItems()}}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        )
    }) : <p className='empty'>no items yet</p>
    
    
    
  return (
    <div className='subject_cont'>
        
        {updateShow ? <div className='edit_cont'>
            <button className='close_btn' onClick={() => setUpdateShow(false)}><i class="fa-solid fa-xmark"></i></button>
            <div className='edit_item'>
                <h1>edit item</h1>
                <input type='text' placeholder='Name' defaultValue={item.name} ref={name} />
                {nameOk === false? <p><i class="fa-solid fa-xmark"></i> please increase number of characters</p> : null}
                <input type='url' placeholder='URL' defaultValue={item.url} ref={url} />
                {urlOk === false? <p><i class="fa-solid fa-xmark"></i> please enter correct URL</p>: null}                
                <button onClick={editItemHandler}>save</button>
            </div>
        </div> : null}
        
        <h1 className='subj_name'>{subject.name}</h1>
        
        <div className='items_form'>
            
            <h2>add item</h2>
            
            <input type='text' placeholder='Name' ref={name} />
            {nameOk === false? <p><i class="fa-solid fa-xmark"></i> please increase number of characters</p> : null}
            <input type='url' placeholder='URL' ref={url} />
            {urlOk === false? <p><i class="fa-solid fa-xmark"></i> please enter correct URL</p>: null}
            {response.length? <p><i class="fa-regular fa-circle"></i> {response}</p>: null}
            
            <button onClick={addItemHandler}>add</button>
            
        </div>
        
        
        {itemsShow}
        
      
    </div>
  )
}

export default Subject
