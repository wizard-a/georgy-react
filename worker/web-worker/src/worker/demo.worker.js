console.log('worker run');

onmessage =  function(e) {
    console.log('worker-data', e.data, 'ss');
    postMessage(e.data);
}