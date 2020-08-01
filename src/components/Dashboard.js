import React from 'react';

import EntriesList from './EntriesList';
import Stats from './Stats';

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <EntriesList entries={props.entries} />
      <Stats entries={props.entries}/>
    </div>
  )
};

export default Dashboard;
