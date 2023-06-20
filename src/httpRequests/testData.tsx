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
  views:number,
  bookmarks: number,
  imageUrl?: string,
  genres:Genre[],
}

export let books: Book[] = [
  { id: 1, title: 'The girl', userId: 1,  createdDate: '2023-01-01', isCompleted: "Ongoing",  views: 28, bookmarks: 20, genres: [{id:1, name: 'Horror'}], imageUrl:'data:image/jpeg;base64,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'},
  { id: 2, title: 'The warrior', userId: 2,  createdDate: '2023-01-02', isCompleted: "Ongoing",  views: 22, bookmarks: 50, genres: [{id:2, name: 'Adventure'}], imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo7quDZ5tc-BeQLQWyuy8OlXQ6DzXheeqJA&usqp=CAU'},
  { id: 3, title: 'Watterfall', userId: 1,  createdDate: '2023-01-01', isCompleted: "Ongoing",  views: 10, bookmarks: 20, genres: [{id:1, name: 'Horror'}], imageUrl:'data:image/jpeg;base64,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'},
  { id: 4, title: 'Book 4', userId: 2,  createdDate: '2023-01-02', isCompleted: "Ongoing",  views: 58, bookmarks: 50, genres: [{id:2, name: 'Adventure'}], imageUrl:'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=600'},
  { id: 5, title: 'Book 5', userId: 1,  createdDate: '2023-01-01', isCompleted: "Ongoing",  views: 12, bookmarks: 20, genres: [{id:1, name: 'Horror'}], imageUrl:'https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg?auto=compress&cs=tinysrgb&w=600'}

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

const girlStory: string = `
<h2>The Journey of a Brave Girl</h2>

<p>
  <strong>Once upon a time</strong>, in a quiet little village nestled among the verdant hills, lived a young girl named <em>Luna</em>. Luna was not your average village girl, she was <span style='color:#ff6347'>brave</span>, <span style='color:#ff6347'>intelligent</span> and full of <span style='color:#ff6347'>curiosity</span>.
</p>

<p>
  Luna had a particular fascination with the <a href='https://en.wikipedia.org/wiki/Moon' target='_blank'>moon</a>. She would often stay awake at night, gazing at the moon and wondering about the secrets it held. She dreamed of traveling to the moon one day.
</p>

<h3>Overcoming Challenges</h3>

<p>
  Luna's dream was not without obstacles. The villagers would laugh at her ambition, telling her it was <strong>impossible</strong>. But Luna was not deterred. She was determined to make her dream a reality.
</p>

<p>
  She studied hard, learning about <em>aerodynamics</em>, <em>physics</em>, and <em>astronomy</em>. Her knowledge grew, and so did her determination. She knew her path wouldn't be easy, but she was prepared for the challenges that lay ahead.
</p>

<h3>A Dream Come True</h3>

<p>
  After many years of hard work and perseverance, Luna's dream finally came true. She built her own spaceship and embarked on her journey to the moon. The villagers who once laughed at her were now in awe of her courage and determination. Luna proved that no dream is too big, and no dreamer too small.
</p>

<p>
  Luna's story serves as an inspiration to all of us, teaching us that with <span style='background-color:#ffff00'>courage</span>, <span style='background-color:#ffff00'>determination</span>, and <span style='background-color:#ffff00'>hard work</span>, even the seemingly impossible can be achieved. 
</p>
`;

export let chapterIdCounter = 12;
export let chapterNumberCounter = 12;

export function increaseChapterCounters(){
  chapterIdCounter += 1;
  chapterNumberCounter +=1;
}

export let chapters: Chapter[] = [
  { id: 1, title: 'Chapter 1. The begining', content: girlStory, chapterNumber: 1, bookId: 1 },
  { id: 2, title: 'Chapter 2', content: '<p>This is a paragraph.</p>', chapterNumber: 2, bookId: 1 },
  { id: 3, title: 'Chapter 3', content: '<p>This is another paragraph.</p>' ,chapterNumber: 3, bookId: 1 },
  { id: 4, title: 'Chapter 4', content: girlStory, chapterNumber: 4, bookId: 1 },
  { id: 5, title: 'Chapter 5', content: '<p>This is a paragraph.</p>', chapterNumber: 5, bookId: 1 },
  { id: 6, title: 'Chapter 6', content: '<p>This is another paragraph.</p>' ,chapterNumber: 6, bookId: 1 },
  { id: 7, title: 'Chapter 7', content: girlStory, chapterNumber: 7, bookId: 1 },
  { id: 8, title: 'Chapter 8', content: '<p>This is a paragraph.</p>', chapterNumber: 8, bookId: 1 },
  { id: 9, title: 'Chapter 9', content: '<p>This is another paragraph.</p>' ,chapterNumber: 9, bookId: 1 },
  { id: 10, title: 'Chapter 10', content: girlStory, chapterNumber: 10, bookId: 1 },
  { id: 11, title: 'Chapter 11', content: '<p>This is a paragraph.</p>', chapterNumber: 11, bookId: 1 },
  { id: 12, title: 'Chapter 12', content: '<p>This is another paragraph.</p>' ,chapterNumber: 12, bookId: 1 },
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
    registered:string,
    bookmarked:number[]
  }

  export let users: User[] = [
    { id: 1, email: 'bubkamisha14@gmail.com', username: 'Forgefill', password: '12345', role: 'admin', registered: '2023-01-01', about:'just me', bookmarked:[1,2,3]},
    { id: 2, email: 'user2@example.com', username: 'user2', password: 'password2', role: 'user', registered: '2023-01-02', about:'hello', bookmarked: []},
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