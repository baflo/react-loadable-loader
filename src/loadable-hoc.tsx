import * as React from 'react';
import Loadable, { OptionsWithoutRender } from 'react-loadable';

export default (opts: Pick<OptionsWithoutRender<any>, 'loader'>) => (
    Loadable({
        loading: () => null,
        delay: 200,
        timeout: 10,
        ...opts
    })
);
