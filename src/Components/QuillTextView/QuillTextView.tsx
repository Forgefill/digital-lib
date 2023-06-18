import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillTextViewProps {
    initialContent: string;
    fontSize: number;
    fontFamily: string;
    isBordered: boolean;
}

const QuillTextView: React.FC<QuillTextViewProps> = ({ initialContent, fontSize, fontFamily, isBordered = false }) =>{

    const [content, setContent] = useState(initialContent);

    // If the initialContent prop changes, update the content state
    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    // Set default fontFamily if 'Default' is chosen
    const effectiveFontFamily = fontFamily === 'Default' ? 'Arial' : fontFamily;

    return (
        <div>
            <style>
                {`
                    .quill-text-view .ql-container.ql-snow {
                        font-size: ${fontSize}px;
                        font-family: ${effectiveFontFamily};
                        ${isBordered ? '' :"border: none !important;"}
                    }
                `}
            </style>
            <div className="quill-text-view">
                <ReactQuill
                    modules={{ toolbar: false }}
                    value={content}
                    readOnly={true}
                />
            </div>
        </div>
    );
} 

export default QuillTextView;
