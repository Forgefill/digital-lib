import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillEditor.css'

interface QuillEditorProps {
    initialContent?: string;
    handleContentChange?: (e : any) => void
}

const QuillEditor: React.FC<QuillEditorProps> = ({ initialContent, handleContentChange }) =>{
    const [content, setContent] = useState(initialContent);

    // If the initialContent prop changes, update the content state
    
    const handleChapterContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
        handleContentChange && handleContentChange(event.target.value);
    };

    useEffect(() => {
        setContent(initialContent);
        
    }, [initialContent]);

    // Define modules (toolbar options)
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], 
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }], 
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }], 
            [{ 'font': [] }],
            ['link'],
            ['clean'] 
        ],
    };

    return (
        <div >
            <div>
                <ReactQuill
                className="quill-editor"
                    modules={modules}
                    value={content}
                    onChange={setContent}
                />
            </div>
        </div>
    );
}
export default QuillEditor;
