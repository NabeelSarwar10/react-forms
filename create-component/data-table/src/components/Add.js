import React from 'react';


const Add = ({ handleAddFormChange, handleAddFormSubmit }) => {

  return (
    <>
      <form onSubmit={handleAddFormSubmit} id='myForm'>
        <input
          type="text"
          name="university"
          required="required"
          placeholder="Enter University Name.."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="from"
          required="required"
          placeholder="From"
          className="mr20"
          id='StartDate'
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="to"
          required="required"
          placeholder="To"
          className="mr20"
          id='EndDate'
          onChange={handleAddFormChange}
        />
        <button type="Submit" className="mr20">Add</button>
      </form>
    </>
  );
}

export default Add;
