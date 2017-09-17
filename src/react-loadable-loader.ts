import * as path from 'path';
import * as loaderUtils from 'loader-utils';
import { loader } from 'webpack';

const loader: loader.Loader = function (content) {
    return content;
}

loader.pitch = function (this: loader.LoaderContext, remainingRequest, precedingRequest, data) {
    this.cacheable && this.cacheable();
    const options = { ...(loaderUtils.getOptions(this) || {}) };
    const loadingRequest = options.loading || path.join(__dirname, './loading');
    const moduleRequest = `!!${remainingRequest}`;

    delete options.loading;

    const code = [
        // ES6 (i.e. no object rest spread operator)
        `import load from ${loaderUtils.stringifyRequest(this, require.resolve("./loadable-hoc"))};`,
        `import loading from ${loaderUtils.stringifyRequest(this, path.relative(this.context, loadingRequest))};`,
        `const Application = load(Object.assign(`,
        `    ${JSON.stringify(options)},`,
        `    {`,
        `        loader: () => import(${loaderUtils.stringifyRequest(this, moduleRequest)}),`,
        `        loading`,
        `    }`,
        `));`,
        `export default Application;`
    ]
        .join('\n');

    return code;
};

export = loader;