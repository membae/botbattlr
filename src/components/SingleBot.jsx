import React from "react";

const SingleBot = ({ bot, setSelectedBot, setMyBots, myBots }) => {
  const handleAddBot = () => {
    const botExists = myBots.some((myBot) => myBot.id === bot.id);

    if (!botExists) {
      setMyBots([...myBots, bot]);
    } else {
      alert("This bot is already in your army.");
    }
  };

  return (
    <div className="product">
      <img src={bot.avatar_url} alt="pic" />
      <div className="description">
        <p>ID: {bot.id}</p>
        <p>
          Name: <b>{bot.name}</b>
        </p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Bot Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <p>Created At: {bot.created_at}</p>
        <p>Updated At: {bot.updated_at}</p>
      </div>
      <button className="goback" onClick={() => setSelectedBot(null)}>
        Go Back
      </button>
      <button className="addbtn" onClick={handleAddBot}>
        Add bot to my army
      </button>
    </div>
  );
};

export default SingleBot;
