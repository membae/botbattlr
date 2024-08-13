import React, { useEffect, useState } from "react";
import Mycollection from "./components/Mycollection";
import SingleBot from "./components/SingleBot";
import MyArmy from "./components/MyArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [myBots, setMyBots] = useState(() => {
    // Load the initial state from localStorage
    const savedBots = localStorage.getItem("myBots");
    return savedBots ? JSON.parse(savedBots) : [];
  });

  useEffect(() => {
    // Fetch bots from the server
    fetch("https://botbattlr-fkki.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  useEffect(() => {
    // Save myBots to localStorage whenever it changes
    localStorage.setItem("myBots", JSON.stringify(myBots));
  }, [myBots]);

  return (
    <div className="App">
      <MyArmy myBots={myBots} setMyBots={setMyBots} />
      {selectedBot ? (
        <SingleBot
          bot={selectedBot}
          setSelectedBot={setSelectedBot}
          setMyBots={setMyBots}
          myBots={myBots}
        />
      ) : (
        <Mycollection bots={bots} setSelectedBot={setSelectedBot} />
      )}
    </div>
  );
}

export default App;
