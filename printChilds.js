const util = require('util');

const getBoxscores = (json) => json.apiResults[0].league.season.eventType[0].events[0].boxscores;
const getEvent = (json) => json.apiResults[0].league.season.eventType[0].events[0];

const printIsGamePlayedIsGameStarted = (playerStat) =>{
  console.log('%s %s \t\t isGameStarted:%s, isGamePlayed:%s'
    , playerStat.player.firstName
    , playerStat.player.lastName
    , playerStat.isGameStarted
    , playerStat.isGamePlayed
  );
}

module.exports.printMinuteSeconds = (json) =>{
  const event = getEvent(json);
  const formattedString = util.format('%sq %s : %s', event.eventStatus.period, event.eventStatus.minutes, event.eventStatus.seconds);
  return formattedString;
}

module.exports.printEventStatus = (json) =>{
  console.log(getEvent(json).eventStatus);
}

module.exports.printBoxscore = (json) =>{
  const boxscores = json.apiResults[0].league.season.eventType[0].events[0].boxscores;
  console.log(boxscores);
}



module.exports.printPlayerstats = (json) =>{
  getBoxscores(json)[0].playerStats
    // .sort((a, b) => a.isGameStarted  )
    .forEach(playerStat => {
    printIsGamePlayedIsGameStarted(playerStat);
  });
}


