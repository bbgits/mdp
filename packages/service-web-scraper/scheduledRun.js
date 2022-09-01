import schedule from "node-schedule";
import index from "./index.mjs";

// const job = schedule.scheduleJob('42 * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
//   });


const job = schedule.scheduleJob({
    second: 0,
    minute: [56, 59],
}, async function () {
    var startTime = await new Date(Date.now()).toLocaleString();
    console.log(await 'STARTING scheduledRun.js at ' + startTime);
    await index()
    var endTime = await new Date(Date.now()).toLocaleString();
    console.log(await 'COMPLETED scheduledRun.js at ' + endTime);
});