import React from 'react'
import Markdown from 'react-markdown';

const MarkdownComp = ({ markdownContent }) => 
    // this component displays markdown content
     <div> 
        <Markdown >
            {markdownContent}
        </Markdown>
     </div>


export default MarkdownComp