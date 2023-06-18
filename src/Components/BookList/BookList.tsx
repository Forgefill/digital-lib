import { Link } from "react-router-dom";
import { BookInfoModel } from "../../httpRequests/bookApi";
import noImagePlaceholder from './BookCard/No-Image-Placeholder.png'

  interface BookListProps {
    name: string;
    books: BookInfoModel[];
  }
  
  const BookList = ({ name, books }: BookListProps) => {
    books.sort((a, b) => b.views - a.views);
    return (
      <div>
        <div className="tile" style={{background:'#00d1b2', maxWidth:'70%'}}>
            <span className="title" style={{color:'white'}}>{name}</span>
        </div>
        {books.length > 0 ? (
          <div >
            {books.map((book) => (
            <div className="columns p-0 mt-2 mb-0"  key={book.id} >
                <div className="column is-narrow p-0 m-2">
                    <Link to="/book">    
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
                        <Link to="/book">
                            <span className="title is-6">{book.title}</span>
                        </Link>
                    </div>
                    <div className="is-flex mt-1 is-align-items-center">
                        <i className="fas fa-bookmark mr-1 is-size-6"></i>
                        <span className="subtitle is-size-6 pb-1">{book.bookmarks}</span>
                    </div>
                    <div className="is-flex mt-1 is-align-items-center">
                        <i className="fas fa-eye mr-1 is-size-7"></i>
                        <span className="subtitle is-size-6 pb-1">{book.views}</span>
                    </div>
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
  