import "bulma/css/bulma.min.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NoImagePlaceholder from "../Page-background.jpg";
import BookGrid from "../../Components/BookList/BookGrid";
import AverageScore from "../../Components/AverageScore/AverageSCore";
import ChapterTable from "../../Components/ChapterTable/ChapterTable";
import { useState } from 'react';
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import QuillTextView from "../../Components/QuillTextView/QuillTextView";
import { testBooks } from "../../httpRequests/bookApi";



const chaptersData = [
  { id: 1, name: "Chapter 1: Chapter name" },
  { id: 2, name: "Chapter 2: Chapter name" },
  { id: 3, name: "Chapter 3: Chapter name" },
  { id: 4, name: "Chapter 4: Chapter name" },
  { id: 5, name: "Chapter 5: Chapter name" },
  { id: 6, name: "Chapter 6: Chapter name" },
  { id: 7, name: "Chapter 7: Chapter name" },
  { id: 8, name: "Chapter 8: Chapter name" },
  { id: 9, name: "Chapter 9: Chapter name" },
  { id: 10, name: "Chapter 10: Chapter name" },
  { id: 11, name: "Chapter 11: Chapter name" },
  { id: 12, name: "Chapter 12: Chapter name" },
  { id: 13, name: "Chapter 13: Chapter name" },
  { id: 14, name: "Chapter 14: Chapter name" },
  { id: 15, name: "Chapter 15: Chapter name" },
  { id: 16, name: "Chapter 16: Chapter name" },
  { id: 17, name: "Chapter 17: Chapter name" },
  { id: 18, name: "Chapter 18: Chapter name" },
  { id: 19, name: "Chapter 19: Chapter name" },
  { id: 20, name: "Chapter 20: Chapter name" },
  { id: 21, name: "Chapter 21: Chapter name" },
  { id: 22, name: "Chapter 22: Chapter name" },
  { id: 23, name: "Chapter 23: Chapter name" },
  { id: 24, name: "Chapter 24: Chapter name" },
  { id: 25, name: "Chapter 25: Chapter name" },
  { id: 26, name: "Chapter 26: Chapter name" },
  { id: 27, name: "Chapter 27: Chapter name" },
  { id: 28, name: "Chapter 28: Chapter name" },
  { id: 29, name: "Chapter 29: Chapter name" },
  { id: 30, name: "Chapter 30: Chapter name" },
  { id: 31, name: "Chapter 31: Chapter name" },
  { id: 32, name: "Chapter 32: Chapter name" },
  { id: 33, name: "Chapter 33: Chapter name" },
  { id: 34, name: "Chapter 34: Chapter name" },
  { id: 35, name: "Chapter 35: Chapter name" },
  { id: 36, name: "Chapter 36: Chapter name" },
  { id: 37, name: "Chapter 37: Chapter name" },
  { id: 38, name: "Chapter 38: Chapter name" },
  { id: 39, name: "Chapter 39: Chapter name" },
  { id: 40, name: "Chapter 40: Chapter name" },
  { id: 41, name: "Chapter 41: Chapter name" },
  { id: 42, name: "Chapter 42: Chapter name" },
  { id: 43, name: "Chapter 43: Chapter name" },
  { id: 44, name: "Chapter 44: Chapter name" },
  { id: 45, name: "Chapter 45: Chapter name" },
  { id: 46, name: "Chapter 46: Chapter name" },
  { id: 47, name: "Chapter 47: Chapter name" },
  { id: 48, name: "Chapter 48: Chapter name" },
  { id: 49, name: "Chapter 49: Chapter name" },
  { id: 50, name: "Chapter 50: Chapter name" },
  { id: 51, name: "Chapter 51: Chapter name" },
  { id: 52, name: "Chapter 52: Chapter name" },
  { id: 53, name: "Chapter 53: Chapter name" },
  { id: 54, name: "Chapter 54: Chapter name" },
  { id: 55, name: "Chapter 55: Chapter name" },
  { id: 56, name: "Chapter 56: Chapter name" },
  { id: 57, name: "Chapter 57: Chapter name" },
  { id: 58, name: "Chapter 58: Chapter name" },
  { id: 59, name: "Chapter 59: Chapter name" },
  { id: 60, name: "Chapter 60: Chapter name" },
  { id: 61, name: "Chapter 61: Chapter name" },

];


export function BookPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [chaptersPerPage, setChaptersPerPage] = useState(5);
  const [reviews, setReviews] = useState([
    { username: 'User1', rating: 5, content: 'Great product!' },
    { username: 'User2', rating: 4, content: 'I liked it, but it has some issues. <p>I recently purchased the <strong>Quill Elite Fountain Pen</strong> and I must say, it\'s an absolute joy to write with!</p>' },
    // add more reviews as needed
  ]);
  
  const totalPages = Math.ceil(chaptersData.length / chaptersPerPage);

  const onPageChange = (pageNum: number) => {
    if(pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const onChaptersPerPageChange = (numChapters: number) => {
    setChaptersPerPage(numChapters);
    setCurrentPage(1);
  };

  const startIdx = (currentPage - 1) * chaptersPerPage;
  const endIdx = startIdx + chaptersPerPage;
  const chaptersToShow = chaptersData.slice(startIdx, endIdx);

  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qu
  isque efficitur, nunc et tempor faucibus, nisi est convallis quam, sit am
  et sagittis libero ipsum ut dui. Sed malesuada, ligula ac cursus dapibus, e
  nim odio blandit erat, in rhoncus quam lectus non justo.`;
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="box" style={{ width: "80%", background:'whitesmoke' }}>
        <div className="box">
          <div className="columns is-centered is-align-items-center">
            <div className="column  is-half">
              <figure className="image is-3by4">
                <img
                  src={NoImagePlaceholder}
                  alt="alt image text"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </figure>
            </div>
            <div className="column">
              <div className="block">
                <h1 className="title is-size-3">Evil Moon</h1>
                <h2 className="subtitle is-size-4">by TestUser</h2>
              </div>

              <AverageScore score={4.6} />

              <div className="columns is-multiline is-left">
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Chapters</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-book mr-1"></i>
                      <span className="has-text-weight-bold">430</span>
                    </div>
                  </div>
                  <div
                    style={{ borderRight: "1px solid #dbdbdb", height: "100%" }}
                  />
                </div>
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Views</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-eye mr-1"></i>
                      <span className="has-text-weight-bold">1200</span>
                    </div>
                  </div>
                  <div
                    style={{ borderRight: "1px solid #dbdbdb", height: "100%" }}
                  />
                </div>
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Bookmarks</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-bookmark mr-1"></i>
                      <span className="has-text-weight-bold">276</span>
                    </div>
                  </div>
                  <div
                    style={{ borderRight: "1px solid #dbdbdb", height: "100%" }}
                  />
                </div>
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column">
                    <span>Status</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <span
                        className="has-text-weight-bold"
                        style={{ color: "rgba(237, 30, 36, 0.8)" }}
                      >
                        Ongoing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tags">
                <span className="tag is-link">Horror</span>
                <span className="tag is-link">Adventure</span>
                <span className="tag is-link">Romance</span>
              </div>

              <div className="buttons">
                <button className="column button is-primary is-medium mr-2">
                  Read
                </button>
                <button className="column button is-info is-medium ml-2">
                  Bookmark
                </button>
              </div>
            </div>
          </div>

          
            <span className="title is-medium m-0">Description</span>
            <div>
              <p>{description}</p>
            </div>
          </div>

          <ChapterTable 
          chapters={chaptersToShow}
          currentPage={currentPage}
          totalPages={totalPages}
          chaptersPerPage={chaptersPerPage}
          onPageChange={onPageChange}
          onChaptersPerPageChange={onChaptersPerPageChange}
          />

          <ReviewForm/>

          {reviews.map((review, index) => (
                <div className='box' key={index} >
                    <span className='title is-4'>{review.username}</span>
                    <p className="tag is-dark is-small is-rounded ml-2">Reader</p>
                    <div className="mt-2 columns">
                      <span className="subtitle column is-narrow m-0 p-0 ml-3 mr-2">Rating:</span>
                      <AverageScore score={review.rating}/>
                    </div>
                    
                    <div className="mt-2">
                      <QuillTextView initialContent={review.content} fontSize={16} fontFamily="Default" isBordered = {true}/>
                    </div>
                </div>
            ))}
        </div>
      </div>
      <div className="box">
        <BookGrid name="Popular books" books={testBooks} />
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;
