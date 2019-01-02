var path = require('path');

require('child_process').exec("npm config get prefix", function(err, stdout, stderr) {
    var nixLib = (process.platform.indexOf("win") === 0) ? "" : "lib"; // win/*nix support
    const currPath = '/Users/qiaojie/Code/github.com/jiechud/georgy-react/webpack/webpack-loader';
    var webpackPath = path.resolve(currPath, 'node_modules', 'webpack-cli', 'bin', 'cli.js');
    // var webpackPath = path.resolve(path.join(stdout.replace("\n", ""), nixLib, 'node_modules', 'webpack-cli', 'bin', 'cli.js'));
    console.log(webpackPath);
    require(webpackPath);
});