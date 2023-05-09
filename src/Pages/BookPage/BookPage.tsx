import "bulma/css/bulma.min.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NoImagePlaceholder from "../Page-background.jpg";
import BookGrid from "../../Components/BookList/BookGrid";
import AverageScore from "../../Components/AverageScore/AverageSCore";

export function BookPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="box" style={{ maxWidth: "80%" }}>
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
                <h1 className="title is-size-3">A Practical Guide to Evil</h1>
                <h2 className="subtitle is-size-4">by ErraticErrata</h2>
              </div>

              <AverageScore score={4.6} />

              <div className="columns is-multiline is-left">
                <div className="column is-flex is-align-items-center">
                  <div className="is-flex-direction-column mr-4">
                    <span>Chapters</span>
                    <div className="is-flex mt-1 is-align-items-center">
                      <i className="fas fa-book mr-1"></i>
                      <span className="has-text-weight-bold">1200</span>
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
                      <span className="has-text-weight-bold">14.7M</span>
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
                      <span className="has-text-weight-bold">45.3K</span>
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
                <span className="tag">One</span>
                <span className="tag">Two</span>
                <span className="tag">Three</span>
                <span className="tag">Four</span>
                <span className="tag">Five</span>
              </div>

              <div className="buttons">
                <button className="button is-primary is-medium is-half mr-2">
                  Read
                </button>
                <button className="button is-info is-medium is-half ml-2">
                  Bookmark
                </button>
              </div>
            </div>
          </div>

          <div>
            hello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsumello world my name is lorem ipsumello world my name is lorem
            ipsum
          </div>
        </div>
      </div>
      <BookGrid name="hello" />
      <Footer />
    </div>
  );
}

export default BookPage;
