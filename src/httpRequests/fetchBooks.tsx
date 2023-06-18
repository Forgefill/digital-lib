import { useEffect, useState } from "react";
import {
  fetchBookInfoList,
  fetchBookImage,
  BookInfoListResponse,
  BookInfoModel,
} from "../httpRequests/bookApi";

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