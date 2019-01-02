import es6 from './es6';
console.log('es6', es6);

console.log('hello');
document.getElementById('app').innerHTML = 'qj11ww22';
// console.log('lodash is array', _.isArray([]))

// 加载css
require('./index.css');
// 加载less
require('./less/index.less');
// 加载sass
require('./sass/index.scss');

// 加载图片
const test = require('./images/test.png');
const img = document.createElement('img');
img.src = test;
document.body.append(img);

throw Error('abc');