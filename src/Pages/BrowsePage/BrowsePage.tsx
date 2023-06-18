import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookSearch from "../../Components/BookSearch/BookSearch";
import BookGrid from "../../Components/BookList/BookGrid";
import { testBooks } from "../../httpRequests/bookApi";
import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import {useState} from 'react'

export function BrowsePage() {
  
  const [isSearched, setIsSearched] = useState(false);

  const genres = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "English" },
  ];
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(e.target.value);
  };

  const handleSearchClick = ()=> {
    setIsSearched(true);
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log(e.target.value);
  };
  const handleGenreSelectLogicChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log(e.target.value);
  };
  const handleRatingLogicChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log(e.target.value);
  };
  const handleRatingSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log(e.target.value);
  };
  return (
    <div className="page">
      <Navbar />
      <div className=" container">
        <div className="box" style={{ width: "100%" }}>
          <div className="block">
            <div className="columns mb-0">
              <div className="is-narrow column">
                <span className="title is-4">Genre</span>
              </div>
              <div className="field">
                <div className="control column is-narrow">
                  <div className="select is-success is-small">
                    <select onChange={handleGenreSelectLogicChange}>
                      <option value="And">And</option>
                      <option value="Or">Or</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-1" />

            <div className="columns is-multiline">
              <div className="column is-one-fifth p-2">
                <label className="checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="ml-2">All</span>
                </label>
              </div>
              {genres.map((genre) => (
                <div key={genre.id} className="column is-one-fifth p-2">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="ml-2">{genre.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="columns mb-0">
              <div className="is-narrow column">
                <span className="subtitle">Rating</span>
              </div>
              <div className="field">
                <div className="control column is-narrow">
                  <div className="select is-success is-small">
                    <select onChange={handleRatingLogicChange}>
                      <option value="Min">Min</option>
                      <option value="Max">Max</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3" />

            <div className="field">
              <div className="control">
                <div className="select is-success">
                  <select
                    onChange={handleRatingSelectChange}
                    style={{ minWidth: "20rem" }}
                  >
                    <option value="none">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="block">
            <span className="subtitle">Sort Results By</span>
            <hr className="my-3" />

            <div className="field">
              <div className="control">
                <div className="select is-success">
                  <select
                    onChange={handleSortChange}
                    style={{ minWidth: "20rem" }}
                  >
                    <option value="rating">Rating Score</option>
                    <option value="bookmarks">Bookmark Count</option>
                    <option value="reviews">Review Count</option>
                    <option value="views">Views</option>
                    <option value="update">Last Update</option>
                    <option value="chapters">Chapter Count</option>
                    <option value="name">Title {"(A>Z)"}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="block">
            <span className="subtitle">Book Status</span>
            <hr className="my-3" />

            <div className="field">
              <div className="control">
                <div className="select is-success">
                  <select
                    onChange={handleStatusChange}
                    style={{ minWidth: "20rem" }}
                  >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="block has-text-centered">
            <button
              className="button is-success is-medium"
              style={{ minWidth: "50%" }}
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
          <SeparateLine/>
          {isSearched && 
          <BookGrid name="Result" books={testBooks} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BrowsePage;
