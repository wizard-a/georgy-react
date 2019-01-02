
console.log('shared worker')
onconnect = function (e) {
    var port = e.ports[0];
    console.log(port, e, 'sfasdf');
    port.onmessage = function (e) {
        e.data.a = 'a';
        port.postMessage(e.data);
    }
}

console.log('sssss')