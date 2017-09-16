# react-loadable-loader

A webpack loader to apply react-loadable to complete sets of files or directories.

## Installation

```bash
$ npm install react-loadable-loader
```

## Quick start

Add the loader to your webpack config and choose files and/or directories to apply the loader:

```javascript
{
    test: /\.(jsx?|tsx?)$/,
    include: [path.join(__dirname, 'src', 'components-loadable')],
    loader: 'react-loadable-loader'
}
```

> All files in `./src/components-loadable` are analyzed by react-loadable.

> Wraps default export component and default exports wrapped component.

### Setup react-loadable

Loader options are forwarded to `react-loadable/Loadable`. So you can setup [react-loadable options](https://github.com/thejameskyle/react-loadable) in loader options:

```javascript
{
    test: /\.(jsx?|tsx?)$/,
    include: [path.join(__dirname, 'src', 'components-loadable')],
    loader: 'react-loadable-loader',
    options: {
        delay: 300,
        timeout: 500
    }
}
```

### Adapt loading component

To setup a loading component pass the absolute path to the component: 

```javascript
{
    test: /\.(jsx?|tsx?)$/,
    include: [path.join(__dirname, 'src', 'components-loadable')],
    loader: 'react-loadable-loader',
    options: {
        loading: path.join(commonPaths.srcPath, 'components-bundled/loading')
    }
}
```

## License

The MIT License (MIT)
Copyright (c) 2014-2017 Florian Bachmann.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
