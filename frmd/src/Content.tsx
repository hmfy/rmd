import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { darcula as dar } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";

function Content({htmlString}: { htmlString: string }) {
    return (<ReactMarkdown
        children={htmlString}
        components={{
            code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        showLineNumbers={true}
                        children={String(children).replace(/\n$/, '')}
                        style={dar}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }}
    />)
}

export default Content
