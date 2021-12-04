import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Tabs} from './components/tabs';

const tabs = [
    {code: 'first', title: 'first title', content: <strong>first data</strong>},
    {code: 'second', title: 'second title', content: <strong>second data</strong>},
    {code: 'third', title: 'third title', content: <strong>third data</strong>},
];

function App() {
    return (
        <div className="App">
            <main>
                <Tabs tabs={tabs} />
            </main>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
