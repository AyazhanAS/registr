import React from 'react'

export default function ReadOnlyRow({contact, handleEditClick, handleDeleteClick}) {
  return (
    <tr>
    <td>{contact.number}</td>
    <td>{contact.from}</td>
    <td>{contact.eyes}</td>
    <td>{contact.about}</td>
    <td>{contact.who}</td>
    <td>{contact.deadline}</td>
    <td>{contact.to}</td>
    <td>{contact.sign}</td>
    <td>
        <button type='button' onClick={(event)=>handleEditClick(event, contact)}>Edit</button>
        <button type='button' onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
    </td>
    
</tr>
  )
}
