const schedule = require('node-schedule')

const t1 = schedule.scheduledJobs('*/5 * 14 * * 2', function(){
    console.log("exec: ", new Date().getSeconds())
})

setTimeout(function(){
    t1.cancel()
    console.log("stopped: ")
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 14
rule.second = 30

const t2 = schedule.scheduleJob(rule, function(){
    console.log("exec 2 :", new Date().getSeconds())
})