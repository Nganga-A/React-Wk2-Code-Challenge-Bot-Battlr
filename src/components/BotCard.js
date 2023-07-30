import React from 'react'

function BotCard({ bot, enlistBot, releaseBot, dischargeBot , buttonText, onClickButton,showEnlistButton,  showSpecsView }) {
    
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


    {onClickButton && (
        <button className="px-3 py-2 my- bg-blue-500 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={onClickButton}>
          {buttonText}
        </button>
      )}

    {showSpecsView && (
        <div>
          {/* Additional descriptions only available in "Show Specs" view */}
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Created at: {bot.created_at}</p>
        <p>Updated at: {bot.updated_at}</p>
        </div>
    )}
    
    
    {enlistBot &&   (
        <button className="px-3 py-2 my-2 bg-blue-500 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={handleEnlist}> Enlist </button> )}

    {releaseBot && <button className="px-3 py-2 my-2 bg-red-500 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={handleRelease}>Release</button>}
    {dischargeBot && <button className="px-3 py-2 my-2 bg-red-700 rounded-md text-sm text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex" onClick={handleDischarge}>Discharge Forever</button>}

</div>
);
};



export default BotCard