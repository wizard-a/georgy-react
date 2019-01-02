const loaderUtils = require('loader-utils');
const schemaUtils = require('schema-utils');

/**
 * 文件的源内容
 */
module.exports = function(source) {
    // 获取loader上的 options
    const options = loaderUtils.getOptions(this);
    console.log('options', options);
    // loaderUtils.getOptions;
    // 异步loader
    // let callback = this.async();
    // setTimeout(() => {
    //     callback(null, source);
    // }, 2000);
    return source;
}