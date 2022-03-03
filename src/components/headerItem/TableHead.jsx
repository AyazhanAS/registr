import React, { Fragment, useState } from 'react'
import AddForm from '../add/AddForm'
import EditTableRow from '../edit/EditTableRow';
import ReadOnlyRow from '../edit/ReadOnlyRow';


export default function TableHead(props) {
  const [contacts, setContacts] = useState(props.state);
  const [editContactId, setEditContactId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    number:"",
    from:"",
    eyes:"",
    about:"",
    who:"",
    daedline:"",
    to:"",
    sign:""

  })

  const handleEditClick = (event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id)

    const formValues = {
        
        number:contact.number,
        from:contact.from,
        eyes:contact.eyes,
        about:contact.about,
        who:contact.who,
        deadline:contact.deadline,
        to:contact.to,
        sign:""

    }
    setEditFormData(formValues)
  }

  

  const handleEditFormChange = (event)=>{
      event.preventDefault();
      const fieldName = event.target.getAttribute("name")
      const fieldValue = event.target.value;

      const newFormData = {...editFormData}

      newFormData[fieldName]=fieldValue;

      setEditFormData(newFormData)
  }

  const handleEditFormSubmit = (event)=>{
    event.preventDefault();

    const editedContact = {
        id:props.editContactId,
        number:editFormData.number,
        from:editFormData.from,
        eyes:editFormData.eyes,
        about:editFormData.about,
        who:editFormData.who,
        deadline:editFormData.deadline,
        to:editFormData.to,
        sign:""
    
      
      }
      const newContacts = [...contacts]
    
    
      const index = contacts.findIndex((contact)=>contact.id===editContactId)
    
      newContacts[index] = editedContact;
      setContacts(newContacts);
      setEditContactId(null)
        
  
   
  
   }

   const handleCanselClick = ()=>{
    setEditContactId(null)
   }

   const handleDeleteClick = (contactId)=>{
        const newContacts = [...contacts]
        const index = contacts.findIndex((contact)=>contact.id===contactId)
        newContacts.splice(index, 1)
        setContacts(newContacts)
   }

 
  return (
    <div>
        <form onSubmit={handleEditFormSubmit}>
        <table>
            <thead>
                <tr>
                    <th>Входящий номер регистрации</th>
                    <th>Откуда пришло?</th>
                    <th>Источник письма</th>
                    <th>Краткое содержание</th>
                    <th>Кому отписан?</th>
                    <th>Дедлайн</th>
                    <th>Кто получил из экспертов</th>
                    <th>Его подпись</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
        {contacts.map((contact)=>(
            <Fragment>
                {editContactId===contact.id?(
                <EditTableRow editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCanselClick={handleCanselClick}/>
                ):(
                    <ReadOnlyRow contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}/>
                )}
                
            </Fragment>
          
        ))}
       
    </tbody>
            
        </table>
        </form>
        <AddForm contacts = {contacts} setContacts = {setContacts} editContactId={editContactId} editFormData={editFormData}/>
    </div>
  )
}
