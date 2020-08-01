import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const BASE_URL = 'https://api.airtable.com/v0/app19KuJxOAHh07ZA/waterlogged';

function App() {
  const [entries, updateEntries] = useState([]);
  const [fetchEntries, invokeFetch] = useState(true);

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
    </div>
  );
}

export default App;
