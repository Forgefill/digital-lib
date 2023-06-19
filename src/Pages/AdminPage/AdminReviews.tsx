import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import {useState} from 'react'
import { Review, deleteReview, reviews, updateReview } from "../../httpRequests/testData";
import { Link } from "react-router-dom";
import QuillTextView from "../../Components/QuillTextView/QuillTextView";

function AdminReviews(){
    const [reviewData, setReviewData] = useState(reviews.filter(x=>x.isReported == true));

    const handleRejectReviewChange = (id: number) => {
        let reviewId: number = reviewData.findIndex(x => x.id === id);
        if (reviewId === -1) {
            console.error(`Review with id ${id} not found`);
            return;
        }
        let review: Review = {...reviewData[reviewId], isReported: false};
        let newReviewData = [...reviewData];
        newReviewData[reviewId] = review;
        setReviewData(newReviewData.filter(x=>x.isReported == true));
        updateReview(review);
    };

    const handleDeleteReviewChange = (id: number) => {
        setReviewData(reviewData.filter((review) => review.id !== id));
        deleteReview(id);
    };

    return  <div className=" is-vcentered is-centered mt-3">

                    {reviewData.map(review => (
                    <div> 
                        <div className=" mb-2 mt-1 is-vcentered ">
                            <div className="column pb-0">
                                <QuillTextView initialContent={review.content} fontSize={16} fontFamily="Default" isBordered={true}/>
                            </div>
                        </div>
                        <div className="pb-0 mt-4 is-one-quarter is-centered buttons">
                                <button className="button is-primary" onClick={() => handleRejectReviewChange(review.id)}>Reject Report</button>
                                <button className="button is-danger" onClick={() => handleDeleteReviewChange(review.id)}>Delete Review</button>
                        </div>
                        <SeparateLine/>
                    </div>
                    ))}
            </div>
}


export default AdminReviews;