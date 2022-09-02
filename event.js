
var EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();
var i = 0;

setInterval(() => {
    emitter.emit("sekunda", i++);
}, 1000);

emitter.on("sekunda", value => console.log(value));