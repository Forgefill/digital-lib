import "bulma/css/bulma.min.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NoImagePlaceholder from "../Page-background.jpg";
import BookGrid from "../../Components/BookList/BookGrid";
import AverageScore from "../../Components/AverageScore/AverageSCore";
import ChapterTable from "../../Components/ChapterTable/ChapterTable";

export function BookPage() {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qu
  isque efficitur, nunc et tempor faucibus, nisi est convallis quam, sit am
  et sagittis libero ipsum ut dui. Sed malesuada, ligula ac cursus dapibus, e
  nim odio blandit erat, in rhoncus quam lectus non justo.`;
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="box" style={{ width: "80%" }}>
          <div className="columns is-centered is-align-items-center">
            <div className="column  is-half">
              <figure className="image is-3by4">
                <img
                  src={NoImagePlaceholder}
                  alt="alt image text"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </figure>
            </div>
            <div className="column">
              <div className="block">
                <h1 className="title is-size-3">Evil Moon</h1>
                <h2 className="subtitle is-size-4">by TestUser</h2>
              </div>

              <AverageScore score={4.6} />

              <div className="columns is-multiline is-left">
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Chapters</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-book mr-1"></i>
                      <span className="has-text-weight-bold">430</span>
                    </div>
                  </div>
                  <div
                    style={{ borderRight: "1px solid #dbdbdb", height: "100%" }}
                  />
                </div>
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Views</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-eye mr-1"></i>
                      <span className="has-text-weight-bold">1200</span>
                    </div>
                  </div>
                  <div
                    style={{ borderRight: "1px solid #dbdbdb", height: "100%" }}
                  />
                </div>
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Bookmarks</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-bookmark mr-1"></i>
                      <span className="has-text-weight-bold">276</span>
                    </div>
                  </div>
                  <div
                    style={{ borderRight: "1px solid #dbdbdb", height: "100%" }}
                  />
                </div>
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column">
                    <span>Status</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <span
                        className="has-text-weight-bold"
                        style={{ color: "rgba(237, 30, 36, 0.8)" }}
                      >
                        Ongoing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tags">
                <span className="tag is-link">Horror</span>
                <span className="tag is-link">Adventure</span>
                <span className="tag is-link">Romance</span>
              </div>

              <div className="buttons">
                <button className="column button is-primary is-medium mr-2">
                  Read
                </button>
                <button className="column button is-info is-medium ml-2">
                  Bookmark
                </button>
              </div>
            </div>
          </div>

          <div className="box">
            <span className="title is-medium m-0">Description</span>
            <div>
              <p>{description}</p>
            </div>
          </div>

          <ChapterTable />

          <div className="box">This is reviews TODO!</div>
        </div>
      </div>
      <BookGrid name="hello" />
      <Footer />
    </div>
  );
}

export default BookPage;
