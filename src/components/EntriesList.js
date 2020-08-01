import React from 'react';
import Entry from './Entry';

const EntriesList = (props) => {
  // the same as const { entries } = props;
  const entries = props.entries;
  return (
    <div className="entries-list">
      {entries.map((entry) => (
        <Entry entry={entry} key={entry.id}/>
      ))}
    </div>
  )
};

export default EntriesList;
