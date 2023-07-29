import React, {useState} from 'react'
import BotCard from './BotCard';

function YourBotArmy ({army}) {

  if (!army) {
    return <div className='bg-red-300 py-8 px-4 flex-grow min-h-[300px] h-auto'>
    <h1 className='text-3xl font-bold text-center mb-8'>Your Bot Army</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
    
    </div>
  </div>
  }

  return (
<div className='bg-red-300 py-8 px-4 flex-grow min-h-[300px] h-auto'>
      <h1 className='text-3xl font-bold text-center mb-8'>Your Bot Army</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
        {army.map((bot) => (
          <BotCard key={bot.id}
                bot={bot} 
                buttonText="Enlisted" />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy