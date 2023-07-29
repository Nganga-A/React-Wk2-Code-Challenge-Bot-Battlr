import React, {useState, useEffect,} from 'react'
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {

  return (
    
    <div className='bg-gray-200 py-8 px-4'>
    <h2 className="text-3xl font-bold text-center mb-8">Available Bots</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bots.map((bot) => (
          <BotCard 
          key={bot.id} 
          bot={bot} 
          //buttonText="Add to Army" 
          enlistBot={enlistBot}
          //onClickButton={() => addToArmy(bot)} onRelease={onRelease} 
          />
        ))}
        </div>
    </div>
  )
}

export default BotCollection;