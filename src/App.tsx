import React from 'react';
import './App.css';
import ReactMarkdown from "./lib/ReactMarkdown";

function App() {
    return (
        <div className="App">
            <div style={{
                width: 1200,
                height: 600,
                margin: "100px auto"
            }}>
                <ReactMarkdown/>
            </div>
        </div>
    );
}

export default App;
