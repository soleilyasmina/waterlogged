import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.airtable.com/v0/app19KuJxOAHh07ZA/waterlogged';

const CreateEntry = (props) => {
  const [fields, updateFields] = useState({
    date: '',
    glasses_consumed: '',
    notes: '',
  });
  const [submitted, updateSubmitted] = useState(false);

  const handleChange = (e) => {
    // same as const name = e.target.name and const value = e.target.value
    const { name, value } = e.target;
    updateFields(prevFields => {
      // only updating the field with the name "name"
      return {
        ...prevFields,
        [name]: name === 'glasses_consumed' ? parseInt(value) : value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL,
        {
          fields: fields
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          }
        });
      updateSubmitted(true);
      setTimeout(() => updateSubmitted(false), 2000);
      updateFields({
        date: '',
        glasses_consumed: '',
        notes: '',
      });
      // this line tells our App.js to make the API call again
      props.invokeFetch(!props.fetchEntries);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="create-entry">
      <label htmlFor="date">Date:</label>
      <input name="date" type="date" value={fields.date} onChange={handleChange}/>
      <label htmlFor="glasses_consumed">Glasses Consumed:</label>
      <input placeholder="4" name="glasses_consumed" type="number" value={fields.glasses_consumed} onChange={handleChange}/>
      <label htmlFor="notes">Notes:</label>
      <textarea placeholder="I needed a good drink of water!" name="notes" value={fields.notes} onChange={handleChange}/>
      <button>{submitted ? 'Submitted!' : 'Submit!'}</button>
    </form>
  );
};

export default CreateEntry;
