import React from "react";
import Product from "./Product";

const MyArmy = ({ myBots, setMyBots }) => {
  const handleDeleteBot = (id) => {
    fetch(`https://botbattlr-fkki.onrender.com/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setMyBots(myBots.filter((bot) => bot.id !== id));
        } else {
          console.error("Failed to delete bot");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleDropBot = (id) => {
    setMyBots(myBots.filter((bot) => bot.id !== id));
  };

  return (
    <div className="my-army">
      <h2>My Army</h2>
      {myBots.map((bot) => (
        <Product
          key={bot.id}
          data={bot}
          army={true}
          onDelete={() => handleDeleteBot(bot.id)}
          onDrop={() => handleDropBot(bot.id)}
        />
      ))}
    </div>
  );
};

export default MyArmy;
