import React from 'react';
import Entry from './Entry';

const EntriesList = (props) => {
  // the same as const { entries } = props;
  const { entries, ...refreshers } = props;
  return (
    <div className="entries">
      <h1>Logs:</h1>
      <div className="entries-list">
        {entries.map((entry) => (
          <Entry
            entry={entry}
            {...refreshers}
            key={entry.id}
          />
        ))}
      </div>
    </div>
  )
};

export default EntriesList;
