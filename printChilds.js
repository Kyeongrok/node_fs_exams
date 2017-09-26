const util = require('util');

const getBoxscores = (json) => json.apiResults[0].league.season.eventType[0].events[0].boxscores;
const getEvent = (json) => json.apiResults[0].league.season.eventType[0].events[0];

const printIsGamePlayedIsGameStarted = (playerStat) =>{
  console.log('%s %s \t\t isGameStarted:%s, isGamePlayed:%s, isEjected:%s'
    , playerStat.player.firstName
    , playerStat.player.lastName
    , playerStat.isGameStarted
    , playerStat.isGamePlayed
    , playerStat.isEjected
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
  getBoxscores(json).forEach(boxscore => {
    const isGamePlayedNum = boxscore.playerStats
      .filter(playerStat => playerStat.isGamePlayed === true).length;

    console.log('isGamePlayedNum:', isGamePlayedNum);

    boxscore.playerStats
      .sort((a, b) => a.isGameStarted  )
      .forEach(playerStat => {
        printIsGamePlayedIsGameStarted(playerStat);
      });
    console.log('----------');
  })

}


