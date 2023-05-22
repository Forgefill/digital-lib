import { apiBaseURL } from "./apiSettings";

export interface BookInfoListResponse {
  data?: BookInfoModel[];
  errors?: string[];
}

export interface BookInfoModel {
  id: number;
  title: string;
  views: number;
  bookmarks: number;
  averageScore: number;
  imageUrl?: string;
}

export async function fetchBookInfoList(): Promise<BookInfoListResponse> {
  try {
    const response = await fetch(`${apiBaseURL}/Book/List`);
    const bookInfoListResponse: BookInfoListResponse = await response.json();

    return bookInfoListResponse;
  } catch (error) {
    console.error("Failed to fetch book info list:", error);
    return {};
  }
}

export interface BookImageResponse {
  data?: BookImage;
  errors?: string[];
}

export interface BookImage {
  id: number;
  contentType: string;
  bookId: number;
  imageData: Uint8Array;
}

export async function fetchBookImage(
  bookId: number
): Promise<BookImageResponse> {
  try {
    const response = await fetch(`${apiBaseURL}/Book/Image/${bookId}`);

    const bookImageResponse = await response.json();
    return bookImageResponse;
  } catch (error) {
    console.log("Failed to fetch image for book:", error, " id: ", bookId);
    return {};
  }
}

export default {
  fetchBookInfoList,
  fetchBookImage,
};
