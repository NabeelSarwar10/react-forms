import React, { useContext, useState } from 'react';
import { ThemeContext } from './components/ThemeContext';
import data from "./mock-data.json";
import Add from './components/Add';
import Edit from './components/Edit';
import './App.css';
import Switch from './toggle';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [records, setRecords] = useState(data)
  const [addFormData, setAddFormData] = useState(
    {
      university: "",
      from: "",
      to: ""
    }
  )
  const [editFormData, setEditFormData] = useState(
    {
      university: "",
      from: "",
      to: ""
    }
  )

  const [editRecordIndex, setEditRecordIndex] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    var startDate = document.getElementById("StartDate").value;
    var endDate = document.getElementById("EndDate").value;

    if ((Date.parse(endDate) <= Date.parse(startDate))) {
      alert("End date should be greater than Start date");
      document.getElementById("EndDate").value = "";
    }
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    var startDate = document.getElementById("StartDate").value;
    var endDate = document.getElementById("EndDate").value;

    if ((Date.parse(endDate) <= Date.parse(startDate))) {
      alert("End date should be greater than Start date");
      document.getElementById("EndDate").value = "";

    }
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const editedFormData = { ...editFormData };
    editedFormData[fieldName] = fieldValue;
    setEditFormData(editedFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newRecord = {
      university: addFormData.university,
      from: addFormData.from,
      to: addFormData.to
    };
    const newRecords = [...records, newRecord]
    setRecords(newRecords);
    var form = document.getElementById("myForm");
    form.reset();
  }

  const handleSaveFormSubmit = (event) => {
    event.preventDefault();
    const newRecord = {
      university: editFormData.university,
      from: editFormData.from,
      to: editFormData.to
    };
    const newRecords = [...records]
    console.log("currentIndex", editRecordIndex);
    console.log("edited array", newRecords);
    newRecords[editRecordIndex] = newRecord;
    setRecords(newRecords);
    setEditRecordIndex(null);
    var form = document.getElementById("myForm");
    form.reset();
  }

  const handleCancelClick = () => {
    setEditRecordIndex(null);
  };

  const handleRemoveRecord = index => {
    const list = [...records];
    list.splice(index, 1);
    setRecords(list);
  }

  const handleEditClick = (event, index, record) => {
    event.preventDefault();
    const currentRecord = {
      university: record.university,
      from: record.from,
      to: record.to
    }
    console.log(index);
    console.log(currentRecord);
    setEditRecordIndex(index);
    setEditFormData(currentRecord);
  }

  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <Switch />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <div>
          <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
          <div className="app-container">
            <h2>Add a Record</h2>
            {editRecordIndex === null ?
              <Add handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit}></Add> :
              <Edit handleEditFormChange={handleEditFormChange} editFormData={editFormData} handleSaveFormSubmit={handleSaveFormSubmit} handleCancelClick={handleCancelClick}></Edit>
            }
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, i) => (
                  <tr>
                    <td>{record.university}</td>
                    <td>{record.from}</td>
                    <td>{record.to}</td>
                    <td>
                      <button type="button" onClick={(event) => handleEditClick(event, i, record)}>Edit</button>
                      <input
                        type="button"
                        value="Delete"
                        className="mr20"
                        onClick={() => handleRemoveRecord(i)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
