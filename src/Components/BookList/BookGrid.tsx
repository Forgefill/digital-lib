import {
  BookInfoModel
} from "../../httpRequests/bookApi";
import BookCard from "./BookCard/BookCard";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import SeparateLine from "../SeparateLine/SeparateLine";

interface BookGridProps {
  name: string;
  viewMoreLink?: string;
  books: BookInfoModel[];
}

const BookGrid = ({ name, viewMoreLink, books }: BookGridProps) => {
  
  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <h2 className="title">{name}</h2>
        {viewMoreLink && <Link to={viewMoreLink}>View More</Link>}
      </div>
      <SeparateLine/>

      {books.length > 0 ? (
        <div className="columns is-multiline">
          {books.map((book) => (
            <div className="column " key={book.id} >
              <BookCard bookInfo={book} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading books...</p>
      )}
    </div>
  );
};

export default BookGrid;
