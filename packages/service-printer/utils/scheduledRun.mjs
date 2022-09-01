import schedule from "node-schedule";
import runMeOnTime from "./runMeOnTime.mjs";

// const job = schedule.scheduleJob('42 * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
//   });


const job = schedule.scheduleJob({
    second: 0,
    minute: 47,
}, function () {
    console.log('Brian Scheduled This, runs at 32! for tea!');
    runMeOnTime()
});


//CHRON FORMAT:

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
