import { Link } from "react-router-dom";
import { BookInfoModel } from "../../../httpRequests/bookApi";
import noImagePlaceholder from "./No-Image-Placeholder.png";
import "bulma/css/bulma.min.css";

interface BookCardProps {
  bookInfo: BookInfoModel;
}

const BookCard: React.FC<BookCardProps> = ({ bookInfo }) => {


  return (
    <div className="card">
      <Link to={`/book/${bookInfo.id}`}>
        <figure className="image is-3by4" >
          <img 
            src={bookInfo.imageUrl || noImagePlaceholder} 
            alt={bookInfo.imageUrl ? bookInfo.title : "No Image"} 
          />
        </figure>

        <div className="card-content has-text-centered">
          <div className="is-clipped block" style={{ maxHeight: 100 }}>
            <p className="title is-6">{bookInfo.title}</p>
          </div>
          <p className="subtitle is-size-6">
            Average Score: {bookInfo.averageScore}
          </p>
        </div>
      </Link>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <i className="fas fa-eye"></i>
          </span>
          &nbsp;{bookInfo.views}
        </p>
        <p className="card-footer-item">
          {bookInfo.bookmarks}&nbsp;
          <span>
            <i className="fa-solid fa-bookmark"></i>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default BookCard;
