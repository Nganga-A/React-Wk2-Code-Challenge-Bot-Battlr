import React from 'react'

function BotCard({ bot, enlistBot, releaseBot, dischargeBot }) {
    
    //function to handle setBot
    const handleEnlist = () => {
        enlistBot(bot);
    };

    const handleRelease = () => {
        releaseBot(bot.id);
    };

    const handleDischarge = () => {
        dischargeBot(bot.id);
    };

  return (

    <div className="bg-white rounded-lg p-4 shadow-md transition-transform transform hover:scale-105"  >
    <img src={bot.avatar_url} alt={bot.name} className="w-32 h-32 mx-auto mb-4 rounded-full" />
    <h3 className="text-xl font-semibold mb-2">{bot.name}</h3>
    <p>Class: {bot.bot_class}</p>
    <p>Health: {bot.health}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>

    {enlistBot && <button className="px-3 py-2 my- bg-blue-500 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={handleEnlist}>Enlist</button>}
    {releaseBot && <button className="px-3 py-2 my-2 bg-blue-500 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={handleRelease}>Release</button>}
    {dischargeBot && <button className="px-3 py-2 my-2 bg-red-500 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={handleDischarge}>Discharge Forever</button>}
  </div>
);
};

//     <div className="bg-white rounded-lg p-4 shadow-md transition-transform transform hover:scale-105" >
//     <img
      
//       src={bot.avatar_url}
//       alt={bot.name}
//       className="w-32 h-32 mx-auto mb-4 rounded-full"
//     />
//     <h3 className="text-xl font-semibold mb-2">{bot.name}</h3>
//     <p>Class: {bot.bot_class}</p>
//     <p>Health: {bot.health}</p>
//     <p>Damage: {bot.damage}</p>
//     <p>Armor: {bot.armor}</p>
//     <button onClick={isEnlisted ? () => onRelease(bot) : onClickButton} className="px-3 py-2 bg-blue-600 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex">
//         {isEnlisted ? 'Release' : 'Add To Army'}
//       </button>
//   </div>
//   )
// }

export default BotCard