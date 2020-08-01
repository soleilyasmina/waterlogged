import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import './App.css';

const BASE_URL = 'https://api.airtable.com/v0/app19KuJxOAHh07ZA/waterlogged';

function App() {
  const [entries, updateEntries] = useState([]); // to store our records
  const [fetchEntries, invokeFetch] = useState(true); // grab new records

  useEffect(() => {
    const getAirtableRecords = async () => {
      const response = await axios.get(`${BASE_URL}?Grid%20view`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      });
      updateEntries(response.data.records);
    };
    getAirtableRecords();
  }, [fetchEntries]);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
