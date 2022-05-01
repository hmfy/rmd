import React from 'react';
import ReactMarkdown from 'fyrmd';
import 'fyrmd/dist/fyrmd.cjs.development.css'

function App() {
    return (
        <div className="App">
            <div style={{
                width: 1200,
                height: 600,
                margin: "100px auto"
            }}>
                <ReactMarkdown />
            </div>
        </div>
    );
}

export default App;
