import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookSearch from "../../Components/BookSearch/BookSearch";
import BookGrid from "../../Components/BookList/BookGrid";

export function SearchPage() {
  return (
    <div className="page">
      <Navbar />
      <div className=" container">
        <div className="block" style={{ width: "100%" }}>
          <BookSearch />
        </div>
      </div>

      <div className="box">
        <BookGrid name="Result" />
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
