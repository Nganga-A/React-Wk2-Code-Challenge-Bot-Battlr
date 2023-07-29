import React from 'react';
import '../App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {


  return (
    <div>
        <div className='container block'>
        <h1 className="font-bold  text-center">Welcome to Bot Battlr</h1>
        </div>
          <div className="container">
          <YourBotArmy />
          <BotCollection />
            
          </div>
    </div>
  );
}

export default App;
