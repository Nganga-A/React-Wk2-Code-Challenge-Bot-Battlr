import React from 'react'
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, onSelectBot }) {

  return (
    
    <div className='bg-gray-200 py-8 px-4'>
    <h2 className="text-3xl font-bold text-center mb-8">Available Bots</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bots.map((bot) => (
          <BotCard 
          key={bot.id} 
          bot={bot} 
          enlistBot={enlistBot}
          buttonText="Show Specs"
          onClickButton={() => onSelectBot(bot)}
          
          />
        ))}
        </div>
    </div>
  )
}

export default BotCollection;