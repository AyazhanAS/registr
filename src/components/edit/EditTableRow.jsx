import React from 'react'

export default function EditTableRow({editFormData,handleEditFormChange, handleCanselClick}) {
  return (
   <tr>
       <td>
           <input
           placeholder='enter number'
           name='number'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.number}
           ></input>
       </td>
       <td>
       <input
           placeholder='enter from'
           name='from'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.from}
           ></input>
       </td>
       <td>
       <input
           placeholder='enter eyes'
           name='eyes'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.eyes}
           ></input>
       </td>
       <td>
       <input
           placeholder='enter about'
           name='about'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.about}
           ></input>
       </td>
       <td>
           <input
           placeholder='enter who'
           name='who'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.who}
           ></input>
       </td>
       <td>
       <input
           placeholder='enter deadline'
           name='deadline'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.deadline}
           ></input>
       </td>
       <td>
       <input
           placeholder='enter to'
           name='to'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.to}
           ></input>
       </td>
       <td>
           <input
           placeholder='enter sign'
           name='sign'
           required = "required"
           type="text"
           onChange={handleEditFormChange}
           value={editFormData.sign}
           ></input>
       </td>
       <td>
           <button type='submit'>Save</button>
           <button type='submit' onClick={handleCanselClick}>Cancel</button>

       </td>
   </tr>
  )
}
