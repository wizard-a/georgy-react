console.log('run');
// web worker
// const Worker  = require('./worker/demo.worker');

// const worker = new Worker();

// worker.postMessage({ a: 3 });

// worker.onmessage = function (event) {
//     console.log('收到了消息!!!22!', event)
// };


// shared worker
const aa = require('./worker/shared.worker');

var worker = new aa({
    inline: true,
})
worker.port.onmessage = (e) => {
    console.log('收到消1息1了!!!!', e.data)
}
worker.port.postMessage({foo: 'bar'})
worker.port.start()
console.log('ss')
