import React from 'react';

const Stats = (props) => {
  const { entries } = props;
  const total = entries.reduce((sum, entry) => {
    // add glasses_consumed from each entry together
    return sum + entry.fields.glasses_consumed;
  }, 0);
  const average = Math.floor(total / entries.length);

  // this is the same as const mostRecentEntry = entries[0];
  const [mostRecentEntry] = entries;

  return (
    <div className="stats">
      <h1>Stats:</h1>
      {
        entries.length > 0 &&
          <>
            <h4>{average}💧</h4>
            <h4>Current Logs: {entries.length}</h4>
            <h4>Most Recent Entry: {mostRecentEntry && mostRecentEntry.fields.date}</h4>
          </>
      }
    </div>
  )
}

export default Stats;
