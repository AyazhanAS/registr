import React, { useState } from 'react'
import {nanoid} from "nanoid"

export default function AddForm(props) {
  const [addFormData, setAddFormData] = useState({
    number:"",
    from:"",
    eyes:"",
    about:"",
    who:"",
    daedline:"",
    to:"",
    sign:""

  })

  const handleAddFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData)
  

    
  }

  const handleAddFormSubmit = (event)=>{
    event.preventDefault();
    const newContact = {
      id:nanoid(),
      number:addFormData.number,
      from:addFormData.from,
      eyes:addFormData.eyes,
      about:addFormData.about,
      who:addFormData.who,
      deadline:addFormData.deadline,
      to:addFormData.to,
      sign:""

    
    }

    const newContacts = [...props.contacts, newContact];
  
    props.setContacts(newContacts)
  }


  return (
    <div>
       
        <h1>Добавить запись</h1>
        <form onSubmit={handleAddFormSubmit}>
            
            <input type="text"
            name='number'
            required="required"
            placeholder='Enter a registration number'
            onChange={handleAddFormChange}
            />
            <input type="text"
            name='from'
            required="required"
            placeholder='Where has come in'
            onChange={handleAddFormChange}
            />
              <input type="text"
            name='eyes'
            required="required"
            placeholder='Источник поступления'
            onChange={handleAddFormChange}
            />
               <input type="text"
            name='about'
            required="required"
            placeholder='About'
            onChange={handleAddFormChange}
            />
               <input type="text"
            name='deadline'
            required="required"
            placeholder='Deadline'
            onChange={handleAddFormChange}
            />
                <input type="text"
            name='to'
            required="required"
            placeholder='кому отписан?'
            onChange={handleAddFormChange}
            />
          
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}
