import React, {useState} from "react";
import Content from "./Content";
import ToolBar from "./ToolBar";

import './css/markdown.css'

function ReactMarkdown() {

    const [htmlString, setHtmlString] = useState('')

    return (<div style={{  width: "100%", border: "1px solid #e6e6e6", height: "100%"}}>
            <ToolBar />
            <div className={ 'wrapper' }>
                <div className={ 'editor' }>
                    <textarea value={htmlString} onInput={e => {
                        setHtmlString(e.currentTarget.value)
                    }} />
                </div>
                <div className={ 'result' }>
                    <Content htmlString={ htmlString } />
                </div>
            </div>
        </div>
    )
}

export default ReactMarkdown
