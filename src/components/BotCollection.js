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
    <div className='container columns-5 ' >
      {bots.map((bot) => (
        <div className='container' key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
        

      ))}
    </div>
    </>
  )
}

export default BotCollection;

