import schedule from "node-schedule";
import index2 from "./index2.mjs";

// const job = schedule.scheduleJob('42 * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
//   });


const job = schedule.scheduleJob({
    second: 0,
    minute: 56,
}, async function () {
    var startTime = await new Date(Date.now()).toLocaleString();
    console.log(await 'STARTING scheduledRun.js at ' + startTime);
    await index2()
    var endTime = await new Date(Date.now()).toLocaleString();
    console.log(await 'COMPLETED scheduledRun.js at ' + endTime);
});