import React from 'react';

import EntriesList from './EntriesList';
import Stats from './Stats';

const Dashboard = (props) => {
  const { entries } = props;
  return (
    <div className="dashboard">
      <EntriesList
        {...props} 
      />
      <Stats entries={entries}/>
    </div>
  )
};

export default Dashboard;
