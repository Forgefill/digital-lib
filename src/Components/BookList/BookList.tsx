import { Link } from "react-router-dom";
import { BookInfoModel } from "../../httpRequests/bookApi";
import noImagePlaceholder from './BookCard/No-Image-Placeholder.png'
import { Book, chapters, comments, reviews } from "../../httpRequests/testData";
import { useState } from "react";

  interface BookListProps {
    name: string;
    books: Book[];
    type: string;
  }
  
  const BookList = ({ name, books, type }: BookListProps) => {

    
  
    
    if(type == 'views'){
      books.sort((a, b) => b.views - a.views);
    }
    else if(type == 'comments'){
      books.sort((a, b) => {
        const commentCountA = chapters
                                .filter(x => x.bookId === a.id)
                                .reduce((count, x) => count + (x.comments?.length || 0), 0);
        const commentCountB = chapters
                                .filter(x => x.bookId === b.id)
                                .reduce((count, x) => count + (x.comments?.length || 0), 0);

        return commentCountB - commentCountA;
      });
    }
    else if(type == 'reviews'){
      books.sort((a, b) => {
         return reviews.filter(x=>x.bookId == b.id).length - reviews.filter(x=>x.bookId == a.id).length;
      });
    }

    let toShowBooks = books.slice(0, 5)
    return (
      <div>
        <div className="tile" style={{background:'#00d1b2', maxWidth:'70%'}}>
            <span className="title" style={{color:'white'}}>{name}</span>
        </div>
        {toShowBooks.length > 0 ? (
          <div >
            {toShowBooks.map((book) => (
            <div className="columns p-0 mt-2 mb-0"  key={book.id} >
                <div className="column is-narrow p-0 m-2">
                    <Link to={`/book/${book.id}`}>    
                        <figure className="image is-128x128 ml-1" style={{overflow: 'hidden', width: '63px', height: '84px'}}>
                            <img
                            src={book.imageUrl || noImagePlaceholder} 
                            alt={book.imageUrl ? book.title : "No Image"} 
                            style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius:"5px"}}/>
                        </figure>
                    </Link>
                </div>
                <div className="column is-narrow p-0 mt-2">
                    <div>
                        <Link to={`/book/${book.id}`}>
                            <span className="title is-6">{book.title}</span>
                        </Link>
                    </div>
                    {type == 'views' && 
                    <div>
                      <div className="is-flex mt-1 is-align-items-center">
                          <i className="fas fa-bookmark mr-1 is-size-6"></i>
                          <span className="subtitle is-size-6 pb-1">{book.bookmarks}</span>
                      </div>
                      <div className="is-flex mt-1 is-align-items-center">
                          <i className="fas fa-eye mr-1 is-size-7"></i>
                          <span className="subtitle is-size-6 pb-1">{book.views}</span>
                      </div>
                    </div>}
                    {type == 'comments' && 
                    <div>
                      <div className="is-flex mt-1 is-align-items-center">
                          <i className="fas fa-comment-dots mr-1 is-size-6"></i>
                          <span className="subtitle is-size-6 pb-1">
                          {
                            (() => {
                              const commentCount = chapters
                                .filter(x => x.bookId === book.id)
                                .reduce((count, x) => count + (x.comments?.length || 0), 0);

                              return commentCount > 0 ? `${commentCount} comments` : 'No comments';
                            })()
                          }
                          
                          </span>
                      </div>
                      <div className="is-flex mt-1 is-align-items-center">
                          <i className="fas fa-check mr-1 is-size-6"></i>
                          <span className="subtitle is-size-6 pb-1">{reviews.filter(x=>x.bookId == book.id).length} reviews</span>
                      </div>
                    </div>}
                    {type == 'reviews' && 
                    <div>
                      <div className="is-flex mt-1 is-align-items-center">
                          <i className="fas fa-star mr-1 is-size-7" style={{color:'orange'}}></i>
                          <span className="subtitle is-size-6 pb-1">{
                              (() => {
                                const reviewData = reviews.filter(x => x.bookId === book.id);
                                const sum = reviewData.reduce((total, review) => total + review.score, 0);
                                const averageScore = reviewData.length ? sum / reviewData.length : 0;
                                return averageScore; 
                              })()
                          }
                          </span>
                      </div>
                      <div className="is-flex mt-1 is-align-items-center">
                          <i className="fas fa-pen mr-1 is-size-7"></i>
                          <span className="subtitle is-size-6 pb-1">{reviews.filter(x=>x.bookId == book.id).length} reviews</span>
                      </div>
                    </div>}
                    
                </div>
            </div>

              
            ))}
          </div>
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    );
  };
  
  export default BookList;
  