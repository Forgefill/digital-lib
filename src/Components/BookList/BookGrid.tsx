import { useEffect, useState } from "react";
import {
  fetchBookInfoList,
  fetchBookImage,
  BookInfoListResponse,
  BookInfoModel,
} from "../../httpRequests/bookApi";
import BookCard from "./BookCard/BookCard";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";

interface BookGridProps {
  name: string;
}

const BookGrid = ({ name }: BookGridProps) => {
  const [books, setBooks] = useState<BookInfoModel[]>([]);

  useEffect(() => {
    fetchBookInfoList().then((bookInfoListResponse: BookInfoListResponse) => {
      if (bookInfoListResponse.data) {
        Promise.all(
          bookInfoListResponse.data.map(async (bookInfo) => {
            let imageUrl: string | undefined = undefined;
            const bookImageResponse = await fetchBookImage(bookInfo.id);
            if (bookImageResponse.data) {
              const blob: Blob = new Blob([bookImageResponse.data.imageData], {
                type: bookImageResponse.data.contentType,
              });
              imageUrl = URL.createObjectURL(blob);
            }
            bookInfo.imageUrl = imageUrl;
            return bookInfo;
          })
        ).then((books) => setBooks(books));
      } else {
        console.log("Error fetching book list:", bookInfoListResponse.errors);
      }
    });
  }, []);

  if (books.length === 0) {
    setBooks([
      {
        id: 1,
        title: "test title 1",
        averageScore: 1,
        views: 200,
        bookmarks: 2,
        imageUrl:
          "data:image/jpeg;base64,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",
      },
      {
        id: 2,
        title: "test title 2",
        averageScore: 2,
        views: 309,
        bookmarks: 11,
        imageUrl: "",
      },
      {
        id: 3,
        title: "The Girl",
        averageScore: 3,
        views: 22,
        bookmarks: 34,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsx1WiiE7vACeFT60R7qvwmIbpbPi0Luc6w&usqp=CAU",
      },
      {
        id: 4,
        title: "Warrior",
        averageScore: 4,
        views: 2022,
        bookmarks: 300,
        imageUrl:
          "https://i.pinimg.com/236x/db/4d/bd/db4dbda028123098929f370f5d3d497d.jpg",
      },
      {
        id: 5,
        title: "title5",
        averageScore: 5,
        views: 2022,
        bookmarks: 300,
        imageUrl: "",
      },
    ]);
  }

  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <h2 className="title">{name}</h2>
        <Link to={"/"}>View More</Link>
      </div>
      {books.length > 0 ? (
        <div className="columns is-multiline">
          {books.map((book) => (
            <div className="column is-3" key={book.id}>
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
