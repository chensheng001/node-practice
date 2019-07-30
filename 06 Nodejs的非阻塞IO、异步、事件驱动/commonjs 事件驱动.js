var events = require('events');

var EventEmitter = new events.EventEmitter();
console.log(EventEmitter);

EventEmitter.on('data',function (res) {
    console.log(res);
});

setTimeout(function () {
    EventEmitter.emit('data','hahaha');
},2000)