import React from 'react'

function BotCard({bot, buttonText, onClickButton}) {
    const { id, name, bot_class, health, damage, armor, avatar_url } = bot;

  return (

    <div key={bot.id} className="bg-white rounded-lg p-4 shadow-md transition-transform transform hover:scale-105" >
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
    <button onClick={onClickButton} className="px-3 py-2 bg-blue-600 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex">
        {buttonText}
    </button>
  </div>
  )
}

export default BotCard