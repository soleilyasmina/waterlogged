import React from 'react';
import EntriesList from './EntriesList';

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <EntriesList entries={props.entries} />
    </div>
  )
};

export default Dashboard;
