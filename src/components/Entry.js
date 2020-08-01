import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.airtable.com/v0/app19KuJxOAHh07ZA/waterlogged';

const Entry = (props) => {
  /*
   * this is identical to:
   * const fields = props.entry.fields;
   */
  const [deleted, updateDeleted] = useState(false);
  const { fields, id } = props.entry;

  const handleDelete = (e) => {
    e.preventDefault();
    try {
      updateDeleted(true);
      setTimeout(async () => {
        await axios.delete(`${BASE_URL}/${id}`, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          }
        });
        // this line tells our App.js to make the API call again
        props.invokeFetch(!props.fetchEntries);
      }, 1000);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="entry">
      <div className="date-container">
        <h2>{fields.date}</h2>
        <h4>{fields.glasses_consumed}💧</h4>
      </div>
      <p>{fields.notes}</p>
      <button onClick={handleDelete}>{deleted ? 'Deleted!' : 'Delete!'}</button>
    </div>
  )
};

export default Entry;
