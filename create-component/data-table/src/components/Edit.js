import React from 'react';


const Edit = ({ handleEditFormChange, editFormData, handleSaveFormSubmit, handleCancelClick }) => {

  return (
    <>
      <form onSubmit={handleSaveFormSubmit} id='myForm'>
        <input
          type="text"
          name="university"
          required="required"
          placeholder="Enter University Name.."
          value={editFormData.university}
          onChange={handleEditFormChange}
        />
        <input
          type="date"
          name="from"
          required="required"
          placeholder="From"
          className="mr20"
          id='StartDate'
          value={editFormData.from}
          onChange={handleEditFormChange}
        />
        <input
          type="date"
          name="to"
          required="required"
          placeholder="To"
          className="mr20"
          id='EndDate'
          value={editFormData.to}
          onChange={handleEditFormChange}
        />
        <button type="submit" className="mr20">Save</button>
        <button type="button" className="mr20" onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  );
}

export default Edit;
