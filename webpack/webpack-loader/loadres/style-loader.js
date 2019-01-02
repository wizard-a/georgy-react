module.exports = function(source) {
    const script =  (`
        var style = document.createElement('style');
        style.innerText = ${JSON.stringify(source)};
        document.head.appendChild(style); 
    `);
    return script;
}