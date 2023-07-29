import React, {useState, useEffect} from 'react'

function BotCollection() {
    const [bots, setBots] = useState([]);

    useEffect(() =>  {
      fetch('http://localhost:3000/bots')
        .then((response) => response.json())
        .then((data) => {
          setBots(data)
        })
    }, []);

  const addToArmy =(bot) => {
        // Implement this function to add the bot to the army
    // This will be passed to Bot component as a prop
  }


  return (
    
    <>
    <h2>Available Bots</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bots.map((bot) => (
        <div
          key={bot.id} className="bg-white rounded-lg p-4 shadow-md transition-transform transform hover:scale-105" >
          <img
            src={bot.avatar_url}
            alt={bot.name}
            className="w-32 h-32 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => addToArmy(bot)} className="px-3 py-2 bg-blue-600 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
          >
            Add To Army
          </button>
        </div>
      ))}
    </div>
  </>
   

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