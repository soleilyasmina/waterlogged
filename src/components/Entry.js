import React from 'react';

const Entry = (props) => {
  /*
   * this is identical to:
   * const fields = props.entry.fields;
   */
  const { fields } = props.entry;
  return (
    <div className="entry">
      <div className="date-container">
        <h2>{fields.date}</h2>
        <h4>{fields.glasses_consumed}💧</h4>
      </div>
      <p>{fields.notes}</p>
    </div>
  )
};

export default Entry;
