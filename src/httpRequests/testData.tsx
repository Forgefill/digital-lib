export default{
  createGenre,
  deleteGenre,
  updateGenre,
  createUser,
  deleteUser,
  updateUser,
  createBook,
  deleteBook,
  updateBook,
  createReview,
  deleteReview,
  updateReview,
  createReport,
  deleteReport,
  updateReport,
  createChapter,
  deleteChapter,
  updateChapter,
  createComment,
  deleteComment,
  updateComment
}

export interface Genre {
  id: number;
  name: string;
}

export let genres: Genre[]= [
    { id: 1, name: "Horror" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Romance" },
];

export function createGenre(genre: Genre) {
  genres.push(genre);
}

export function deleteGenre(id: number) {
  genres = genres.filter((x) => x.id !== id);
}

export function updateGenre(genre: Genre) {
  const index = genres.findIndex((x) => x.id === genre.id);
  if (index !== -1) {
    genres[index] = genre;
  }
}

export interface Book{
  id:number,
  title:string,
  userId:number,
  description?:string,
  createdDate:string,
  isCompleted:string,
  averageScore:number,
  views:number,
  bookmarks: number,
  imageUrl?: string,
  genres:Genre[],
}

export let books: Book[] = [
  { id: 1, title: 'Book 1', userId: 1,  createdDate: '2023-01-01', isCompleted: "Ongoing", averageScore: 4.0, views: 100, bookmarks: 20, genres: [{id:1, name: 'Horror'}], imageUrl:'https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg?auto=compress&cs=tinysrgb&w=600'},
  { id: 2, title: 'Book 2', userId: 2,  createdDate: '2023-01-02', isCompleted: "Ongoing", averageScore: 4.5, views: 200, bookmarks: 50, genres: [{id:2, name: 'Adventure'}], imageUrl:'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=600'},
];

export function createBook(book: Book) {
  books.push(book);
}

export function deleteBook(id: number) {
  books = books.filter((x) => x.id !== id);
}

export function updateBook(book: Book) {
  const index = books.findIndex((x) => x.id === book.id);
  if (index !== -1) {
    books[index] = book;
  }
}

export interface Chapter{
  id:number,
  title:string,
  content?:string,
  chapterNumber:number,
  bookId:number,
  comments?: Comment[],
}
export let chapters: Chapter[] = [
  { id: 1, title: 'Chapter 1', content: '<p>This is a paragraph.</p>', chapterNumber: 1, bookId: 1 },
  { id: 2, title: 'Chapter 2', content: '<p>This is another paragraph.</p>', chapterNumber: 2, bookId: 1 },
  { id: 3, title: 'Chapter 3', content: '<p>This is another paragraph.</p>', chapterNumber: 5, bookId: 1 },
  // Add more chapters as needed...
];

export function createChapter(chapter: Chapter) {
  chapters.push(chapter);
}

export function deleteChapter(id: number) {
  chapters = chapters.filter((chapter) => chapter.id !== id);
}

export function updateChapter(chapter: Chapter) {
  const index = chapters.findIndex((existingChapter) => existingChapter.id === chapter.id);
  if (index !== -1) {
      chapters[index] = chapter;
  }
}

export interface Comment {
  id: number;
  chapterId: number;
  userId: number;
  content: string;
  isReported: boolean;
  likes: number;
}

export let comments: Comment[] = [
  { id: 1, chapterId: 1, userId: 1, content: 'Great chapter!', isReported: false, likes: 10 },
  { id: 2, chapterId: 1, userId: 2, content: 'Looking forward to the next one!', isReported: false, likes: 20 },
  { id: 3, chapterId: 1, userId: 2, content: 'You are so stupid !', isReported: true, likes: 20 },
  // Add more comments as needed...
];

export function createComment(comment: Comment) {
  comments.push(comment);
}

export function deleteComment(id: number) {
  comments = comments.filter((comment) => comment.id !== id);
}

export function updateComment(comment: Comment) {
  const index = comments.findIndex((existingComment) => existingComment.id === comment.id);
  if (index !== -1) {
    comments[index] = comment;
  }
}

  export interface Review{
    id:number,
    bookId:number,
    score:number,
    likes:number,
    isReported:boolean,
    content:string,
    userId:number,
  }
  
  export let reviews: Review[] = [
      { id: 1, bookId: 1, score: 4.5, likes: 20, isReported: false, content: 'Great book!', userId: 1 },
      { id: 2, bookId: 2, score: 4.0, likes: 10, isReported: true, content: 'Really enjoyed this one.', userId: 2 },
      // Add more reviews as needed...
  ];
  
  export function createReview(review: Review) {
      reviews.push(review);
  }
  
  export function deleteReview(id: number) {
      reviews = reviews.filter((review) => review.id !== id);
  }
  
  export function updateReview(review: Review) {
      const index = reviews.findIndex((existingReview) => existingReview.id === review.id);
      if (index !== -1) {
          reviews[index] = review;
      }
  }

  export interface Report {
    id: number;
    text: string;
    bookId: number;
  }
  
  export let reports: Report[] = [
    { id: 1, text: 'Inappropriate content', bookId: 1 },
    { id: 2, text: 'Plagiarism', bookId: 2 },
    // Add more reports as needed...
  ];
  
  export function createReport(report: Report) {
    reports.push(report);
  }
  
  export function deleteReport(id: number) {
    reports = reports.filter((report) => report.id !== id);
  }
  
  export function updateReport(report: Report) {
    const index = reports.findIndex((existingReport) => existingReport.id === report.id);
    if (index !== -1) {
      reports[index] = report;
    }
  }

  export interface User{
    id:number,
    email:string,
    about:string,
    username:string,
    password:string,
    role:string,
    registered:string
  }

  export let users: User[] = [
    { id: 1, email: 'bubkamisha14@gmail.com', username: 'Forgefill', password: '12345', role: 'admin', registered: '2023-01-01', about:'just me'},
    { id: 2, email: 'user2@example.com', username: 'user2', password: 'password2', role: 'user', registered: '2023-01-02', about:'hello'},
    // Add more users as needed...
];

export function createUser(user: User) {
  users.push(user);
}

export function deleteUser(id: number) {
  users = users.filter((user) => user.id !== id);
}

export function updateUser(user: User) {
  const index = users.findIndex((existingUser) => existingUser.id === user.id);
  if (index !== -1) {
      users[index] = user;
  }
}