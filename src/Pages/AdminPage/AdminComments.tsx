import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import {useState} from 'react'
import { Comment, comments, deleteComment, updateComment} from "../../httpRequests/testData";
import { Link } from "react-router-dom";

function AdminComments(){
    const [commentData, setCommentData] = useState(comments.filter(x=>x.isReported == true));

    const handleRejectCommentChange = (id: number) => {
        let commentId: number = commentData.findIndex(x => x.id === id);
        if (commentId === -1) {
            console.error(`Comment with id ${id} not found`);
            return;
        }
        let comment: Comment = {...commentData[commentId], isReported: false};
        let newCommentData = [...commentData];
        newCommentData[commentId] = comment;
        setCommentData(newCommentData.filter(x=>x.isReported == true));
        updateComment(comment);
    };

    const handleDeleteCommentChange = (id: number) => {
        setCommentData(commentData.filter((comment) => comment.id !== id));
        deleteComment(id);
    };

    return  <div className=" is-vcentered is-centered mt-3">

                    {commentData.map(comment => (
                    <div> 
                        <div className=" mb-2 mt-1 is-vcentered ">
                            <div className="column pb-0">
                                <textarea className="textarea is-danger" readOnly>{comment.content}</textarea>
                            </div>
                        </div>
                        <div className="pb-0 mt-4 is-one-quarter is-centered buttons">
                                <button className="button is-primary" onClick={()=>handleRejectCommentChange(comment.id)}>Reject Report</button>
                                <button className="button is-danger" onClick={()=>handleDeleteCommentChange(comment.id)}>Delete Comment</button>
                        </div>
                        <SeparateLine/>
                    </div>
                    ))}
            </div>
}


export default AdminComments;