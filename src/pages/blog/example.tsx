import React from 'react';
import ReactMarkdown from 'react-markdown'

class Example extends React.Component {
    render() {
        return (
            <div>
                <ReactMarkdown>
                # Heading

Some text

- list item 1

- list item 2

- list item 3

[My website](https://daily-dev-tips.com)
                </ReactMarkdown>
            </div>
        );
    }
}

export default Example;
