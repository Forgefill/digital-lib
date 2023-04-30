import { BookInfoModel } from "../../../httpRequests/bookApi";
import noImagePlaceholder from "./No-Image-Placeholder.png";
import './BookCard.css'
import 'bulma/css/bulma.min.css'

interface BookCardProps {
bookInfo: BookInfoModel;
}

const BookCard: React.FC<BookCardProps> = ({ bookInfo }) => {
return (
<div className="card">
  {bookInfo.imageUrl ? (
    <figure className="image is-3by4">
      <img src={bookInfo.imageUrl} alt={bookInfo.title} />
    </figure>
  ) : (
    <figure className="image is-3by4">
      <img src={noImagePlaceholder} alt="No Image" />
    </figure>
  )}
  <div className="card-content has-text-centered">
    <div className="is-clipped block" style={{maxHeight:100}}>
      <p className="title is-6">{bookInfo.title}, this is book title</p>
    </div>
    <p className="subtitle is-size-6">Average Score: {bookInfo.averageScore}</p>
  </div>
  <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          <i className="fas fa-eye"></i>
        </span>
        &nbsp;12mln
      </p>
      <p className="card-footer-item">
        333k&nbsp;
        <span>
          <i className="fa-solid fa-bookmark"></i>
        </span>
      </p>
    </footer>
</div>
);
};

export default BookCard;