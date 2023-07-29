import React, {useContext} from 'react'
import BotCard from './BotCard';

function YourBotArmy ({ bots, releaseBot, dischargeBot }) {

  return (
<div className='bg-pink-100 py-8 px-4 flex-grow h-auto'>
      <h2 className='text-3xl font-bold text-center mb-8'>Your Bot Army</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id}
                bot={bot} 
                releaseBot={releaseBot}
                dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy