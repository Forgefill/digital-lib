import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "./ReviewForm.css";
import { DeltaStatic, Sources } from 'quill';


const ReviewForm = () =>{

    const [charCount, setCharCount] = useState(0);
    const charLimit:number = 500;
    const errorStyle = { color: 'red' }; // Style for the error message

    

    const handleQuillChange = (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor) => {
        const text = editor.getText();
        const characters = text.trim().length;  // Get character count
        setCharCount(characters);
    }

    return (
        <div className="box">
            <div className="block">
                <span className="title">Write a review</span>
            </div>
            <div className="block columns">
                <div className="column is-narrow">
                    <span className="subtitle">select rating:</span>
                </div>

                <div className="control has-icons-left">
                    <div className="select is-primary">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className= "icon is-small is-left">
                        <i className="fas fa-star" style={{ color: "orange" }}></i>
                    </div>
                </div>
            </div>

            <div className="block">
                <ReactQuill
                    id='ql-review-form' 
                    onChange={handleQuillChange}
                    placeholder="Write your review here"
                />
                <p>Character count: {charCount} / {charLimit}</p>
                {charCount > charLimit && <p style={errorStyle}>Your review exceeds the maximum character limit.</p>}
            </div>
            
            <div className="block buttons">
                <button className="button is-primary" disabled={charCount > charLimit}>Submit</button>
            </div>

        </div>
    )
}

export default ReviewForm;
