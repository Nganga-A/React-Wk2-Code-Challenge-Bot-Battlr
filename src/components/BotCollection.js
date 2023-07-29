import React, {useState, useEffect} from 'react'
import BotCard from './BotCard';

function BotCollection() {
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);

    useEffect(() =>  {
      fetch('http://localhost:3000/bots')
        .then((response) => response.json())
        .then((data) => {
        setBots(data.slice(0,12));
        })
    }, []);
  
  
    const addToArmy = (bot) => {
      // Check if the bot is not already in the army
      if (!army.some((toBeAddedBot) => toBeAddedBot.id === bot.id)) {
        // If the bot is not in the army, add it to the army
        setArmy([...army, bot]);
  } }


  return (
    
    <div className='bg-gray-200 py-8 px-4'>
    <h2 className="text-3xl font-bold text-center mb-8">Available Bots</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bots.map((bot) => (
          <BotCard 
          key={bot.id} 
          bot={bot} 
          buttonText="Add to Army" 
          onClickButton={() => addToArmy(bot)} />

      ))}
    </div>
  </div>
   

  )
}

export default BotCollection;



















{/* <>
<h2>Available Bots</h2>
<div className='container columns-5 inline-block' >
  {bots.map((bot) => (
    <div className='container' key={bot.id}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => addToArmy(bot)}>Add to Army</button>

      <button type="button" class="px-2 py-2 bg-blue-600 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex">Add To Army</button>
    </div>
    

  ))}
</div>
</> */}