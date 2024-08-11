import React from 'react';

const SortBar = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      <button
        className={sortBy === 'health' ? 'active' : ''}
        onClick={() => setSortBy('health')}
      >
        Health
      </button>
      <button
        className={sortBy === 'damage' ? 'active' : ''}
        onClick={() => setSortBy('damage')}
      >
        Damage
      </button>
      <button
        className={sortBy === 'armor' ? 'active' : ''}
        onClick={() => setSortBy('armor')}
      >
        Armor
      </button>
    </div>
  );
};

export default SortBar;
