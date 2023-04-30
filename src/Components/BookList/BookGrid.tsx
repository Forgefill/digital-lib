import { useEffect, useState } from 'react';
import { fetchBookInfoList, fetchBookImage, BookInfoListResponse, BookInfoModel } from '../../httpRequests/bookApi';
import BookCard from './BookCard/BookCard';
import './BookGrid.css'

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
        console.log('Error fetching book list:', bookInfoListResponse.errors);
      }
    });
  }, []);

  if (books.length === 0) {
    setBooks([
      { id: 1, title: 'title1', averageScore: 1 },
      { id: 2, title: 'title2', averageScore: 2 },
      { id: 3, title: 'title3', averageScore: 3 },
      { id: 4, title: 'title4', averageScore: 4 },
      { id: 5, title: 'title5', averageScore: 5 },
    ]);
  }


  return (
    <div className='book-grid-container'>
      <div className="book-grid-header">
          <h2>{name}</h2>
          <hr className="silver-line" />
      </div>
        {books.length > 0 ? (
          <div className="book-grid">
            {books.map((book) => (
              <BookCard key={book.id} bookInfo={book} />
            ))}
          </div>
        ) : (
          <p>Loading books...</p>
        )}
      <hr className="content-line" />
    </div>
    
  );
};

export default BookGrid;