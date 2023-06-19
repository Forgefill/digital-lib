import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookGrid from "../../Components/BookList/BookGrid";
import { Book, books } from "../../httpRequests/testData";
import {useState} from 'react'

export function SearchPage() {

  const [isSearched, setIsSearched] = useState(false);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookData, setBookData] = useState<Book[]|undefined>();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearched(true);
    setBookData(books.filter(x=>x.title.includes(title)))
  };

  return (
    <div className="page">
      <Navbar />
      <div className=" container">
        <div className="block" style={{ width: "100%" }}>
          <form onSubmit={handleSubmit}>
            <div className="field columns has-addons is-gapless">
              <div className="control column is-one-fifth">
                <button
                  type="submit"
                  className={`button is-primary is-rounded is-fullwidth is-size-5 ${
                    isLoading ? "is-loading" : ""
                  }`}
                  disabled={isLoading}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="control column">
                <input
                  id="title"
                  className="input is-rounded is-primary is-size-5"
                  type="text"
                  placeholder="Search book by title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="box has-text-centered" style={{minHeight:'65vh', minWidth:'100vh'}}>
        {isSearched && bookData ? <BookGrid name="Result" books={bookData}/> : <span className="title"></span>}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
