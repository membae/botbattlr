import React from 'react';

const FilterBar = ({ classes, selectedClasses, setSelectedClasses }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedClasses(prevState => 
      prevState.includes(value)
        ? prevState.filter(cls => cls !== value)
        : [...prevState, value]
    );
  };

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      {classes.map((cls) => (
        <label key={cls}>
          <input
            type="checkbox"
            value={cls}
            checked={selectedClasses.includes(cls)}
            onChange={handleChange}
          />
          {cls}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
