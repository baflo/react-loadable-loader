import * as loaderUtils from 'loader-utils';
import { loader } from 'webpack';

const loader: loader.Loader = function (content) {
    return content;
}

loader.pitch = function (this: loader.LoaderContext, remainingRequest, precedingRequest, data) {
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
};

export = loader;