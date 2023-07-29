import React, { useState, useEffect } from 'react';
import '../App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  
  // State to store enlisted bots
  const [allBots, setAllBots] = useState([]); // State to store all available bots
  const [enlistedBots, setEnlistedBots] = useState([]); // State to store enlisted bots

  //Fetch
    useEffect(() =>  {
      fetch('http://localhost:3000/bots')
        .then((response) => response.json())
        .then((data) => {
        setAllBots(data.slice(0,12));
        })
    }, []);

    //Function to Enlist a bot into the army
    const enlistBot = (bot) => {
      // Check if the bot is not already in the army
      if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
        setEnlistedBots([...enlistedBots, bot]);
        } 
      };
    

    // Function to release a bot from the army
      const releaseBot = (botId) => {
      setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
      };
  
    
      //Function to discharge a bot forever
      const dischargeBot = (botId) => {
        
          // Remove the bot from the frontend first
          setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
          console.log(botId)
          // Then make a DELETE request to the backend API to remove it from the database
            fetch(`http://localhost:3000/bots/${botId}`, {
          method: "DELETE",
            });

          // If the deletion is successful, update the state to remove the bot from enlistedBots
          setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
          setAllBots(allBots.filter((bot) => bot.id !== botId));
          }
      
      


  return (
    <div className='h-screen flex flex-col'>
        <div className='container mx-auto px-4'>
          <h1 className="text-3xl bg-blue-300 font-bold text-center py-8 border-b-2 border-gray-400 w-full">Welcome to Bot Battle</h1>
        </div>
          <div className="container mx-auto px-4">
          <YourBotArmy bots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
          </div>
          <div className="container mx-auto px-4 p-5">
          
          <BotCollection bots={allBots} enlistBot={enlistBot} />
          </div> 
          
    </div>
  );
}

export default App;
