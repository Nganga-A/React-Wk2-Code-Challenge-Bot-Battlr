import React from 'react';
import '../App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {


  return (
    <div className="App">
        <h1 className="font-bold text-center">Welcome to Bot Battlr</h1>
          <div className="container">
            <BotCollection />
            <YourBotArmy />
          </div>
    </div>
  );
}

export default App;
