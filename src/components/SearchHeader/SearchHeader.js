import React from 'react';

function SearchHeader({ count, query }) {
  const quantifier = `result${count > 1 ? 's' : ''}`;

  return (
    <p className="kilo search__header">
      Found {count} {quantifier} for {`"${query}".`}
    </p>
  );
}

export default SearchHeader;
