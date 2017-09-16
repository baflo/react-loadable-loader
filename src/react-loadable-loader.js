var loaderUtils = require("loader-utils");

module.exports = function (content) {
    return content;
}
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
    this.cacheable && this.cacheable();
    const query = loaderUtils.getOptions(this) || {};
    const moduleRequest = `!!${remainingRequest}`;

    const code = [
        `import load from ${loaderUtils.stringifyRequest(this, require.resolve("./loadable-hoc"))};`,
        `const Application = load({ loader: () => import(${loaderUtils.stringifyRequest(this, moduleRequest)}) });`,
        `export default Application;`
    ]
        .join('\n');

    return code;
}