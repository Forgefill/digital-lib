import "bulma/css/bulma.min.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NoImagePlaceholder from "../../Components/BookList/BookCard/No-Image-Placeholder.png";
import BookGrid from "../../Components/BookList/BookGrid";
import AverageScore from "../../Components/AverageScore/AverageSCore";
import ChapterTable from "../../Components/ChapterTable/ChapterTable";
import { useState } from 'react';
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import QuillTextView from "../../Components/QuillTextView/QuillTextView";
import { chapters, books, users } from "../../httpRequests/testData";
import { useNavigate, useParams } from 'react-router-dom';
import { reviews } from "../../httpRequests/testData";


export function BookPage() {
  let { id} = useParams();
  const navigate = useNavigate()
  let bookId = -1;
  if(id){
    bookId = parseInt(id, 10);
  }
  else{
      navigate('/BookNotFound');
  }
  const [book, setBook] = useState(books.find(x=>x.id == bookId))
  const [author, setAuthor] = useState(users.find(x=>x.id == book?.userId))
  const [chaptersData, setChapters] = useState(chapters.filter(x=>x.bookId == book?.id))
  const [currentPage, setCurrentPage] = useState(1);
  const [chaptersPerPage, setChaptersPerPage] = useState(5);
  const [reviewData, setReviewData] = useState(reviews);
  
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
                  src={book?.imageUrl ? book.imageUrl :NoImagePlaceholder}
                  alt="alt image text"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </figure>
            </div>
            <div className="column">
              <div className="block">
                <h1 className="title is-size-3">{book?.title}</h1>
                <h2 className="subtitle is-size-4">by {author?.username}</h2>
              </div>

              {book?.averageScore && <AverageScore score={book?.averageScore} />}

              <div className="columns is-multiline is-left">
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Chapters</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-book mr-1"></i>
                      <span className="has-text-weight-bold">{chaptersData.length}</span>
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
                      <span className="has-text-weight-bold">{book?.views}</span>
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
                      <span className="has-text-weight-bold">{book?.bookmarks}</span>
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
                        {book?.isCompleted}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tags">
                {book?.genres.map(genre=>(<span className="tag is-link">{genre.name}</span>))}
              </div>

              <div className="buttons">
                <button className="column button is-primary is-medium mr-2">
                  Read
                </button>
                <button className="column button is-primary is-medium ml-2">
                  Bookmark
                </button>
              </div>
            </div>
          </div>

          
            <span className="title is-medium m-0">Description</span>
            <div>
              <p>{book?.description}</p>
            </div>
          </div>

          {chaptersData.length <= 0 ? 
          <div className="box title"> Book does not have any chapters</div>
          :
          <ChapterTable 
          chapters={chaptersToShow}
          currentPage={currentPage}
          totalPages={totalPages}
          chaptersPerPage={chaptersPerPage}
          bookId={bookId}
          onPageChange={onPageChange}
          onChaptersPerPageChange={onChaptersPerPageChange}
          />}
          

          <ReviewForm/>

          {reviewData.map((review, index) => (
                <div className='box' key={index} >
                    <span className='title is-4'>{users.filter(x=>x.id == review.userId)[0].username}</span>
                    <p className="tag is-dark is-small is-rounded ml-2">Reader</p>
                    <div className="mt-2 columns">
                      <span className="subtitle column is-narrow m-0 p-0 ml-3 mr-2">Rating:</span>
                      <AverageScore score={review.score}/>
                    </div>
                    
                    <div className="mt-2">
                      <QuillTextView initialContent={review.content} fontSize={16} fontFamily="Default" isBordered = {true}/>
                    </div>
                </div>
            ))}
        </div>
      </div>
      <div className="box">
        <BookGrid name="Popular books" books={books} />
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;
