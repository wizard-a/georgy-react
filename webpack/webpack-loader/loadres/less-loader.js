const less = require('less');

module.exports = function(source) {
    less.render(source, (err, result) => {
        this.callback(err, result.css);
    })
}