import React from 'react';
import Capsule from './Capsule/Capsule';

function CapsuleContainer({ data, schema }) {
  const renderCapsule = (row) => {
    const value =
      typeof schema.accessor === 'function'
        ? schema.accessor(row)
        : row[schema.accessor];
    return <Capsule>{value}</Capsule>;
  };

  return (
    <div className="flex flex-wrap capsule-container">
      {data.map((row) => renderCapsule(row))}
    </div>
  );
}

export default CapsuleContainer;
