import React from 'react';
import '../App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {


  return (
    <div>
        <div className='container mx-auto px-4'>
        <h1 className="text-3xl bg-blue-100 font-bold text-center py-8 border-b-2 border-gray-400 w-full">Welcome to Bot Battlr</h1>
        </div>
          <div className="container mx-auto px-4">
          <YourBotArmy />
          <BotCollection />
            
          </div>
    </div>
  );
}

export default App;
