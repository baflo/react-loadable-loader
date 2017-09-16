import * as React from 'react';
import One from './components-loadable/one';
import Two from './components-loadable/two';
import Three from './components-loadable/three';
import Another from './components-bundled/another';

const components = [One, Two, Three, Another];

class App extends React.Component<{}, { select: number, chunks: string[] }> {
    state = {
        select: 0,
        chunks: []
    };

    _updateChunks = () => {
        this.setState({
            chunks: [].slice.call(document.head.getElementsByTagName('script'))
        });
    };
    
    componentDidMount() {
        const mut = new MutationObserver(this._updateChunks);
        mut.observe(document.head, { childList: true });
        this._updateChunks();
    }

    render() {
        const C = components[this.state.select];

        return (
            <div>
                <C />
                <button onClick={() => { this.setState({ select: (this.state.select + 1) % components.length }) }}>
                    {'Click here'}
                </button>

                <ul>
                    {'Loaded chunks'}
                    {
                        this.state.chunks.map((tag: HTMLScriptElement) => (
                            <li key={tag.src}>
                                {tag.src}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default App;