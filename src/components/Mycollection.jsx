import React, { useState } from 'react';
import Product from './Product';
import SortBar from './SortBar';
import FilterBar from './Filter';
import './products.css';

const Mycollection = ({ bots, setSelectedBot }) => {
  const [sortBy, setSortBy] = useState('health');
  const [selectedClasses, setSelectedClasses] = useState([]);

  const classes = Array.from(new Set(bots.map(bot => bot.bot_class)));

  // Sort bots based on the selected attribute
  const sortedBots = [...bots].sort((a, b) => b[sortBy] - a[sortBy]);

  // Filter bots based on selected classes
  const filteredBots = selectedClasses.length
    ? sortedBots.filter(bot => selectedClasses.includes(bot.bot_class))
    : sortedBots;

  return (
    
    <div className="products-container">
      <h2 style={{"textAlign":"center"}}>My Bot Collection</h2>
      <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      <FilterBar
        classes={classes}
        selectedClasses={selectedClasses}
        setSelectedClasses={setSelectedClasses}
      />
      <div className="products">
        {filteredBots.map((bot) => (
          <Product key={bot.id} data={bot} setSelectedBot={setSelectedBot} army={false} />
        ))}
      </div>
    </div>
  );
};

export default Mycollection;
