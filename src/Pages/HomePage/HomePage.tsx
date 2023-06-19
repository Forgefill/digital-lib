import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookGrid from "../../Components/BookList/BookGrid";
import { books } from "../../httpRequests/testData";
import BookList from "../../Components/BookList/BookList";

function HomePage() {


  return (
    <div className="page">
      <Navbar />
      <div className="box mt-2" style={{width:'80%'}}>
        <div className="columns">
          <div className="column">
            <BookList name= "Most Read" books={books} type="views"/>
          </div>
          <div className="column">
            <BookList name= "New Trends" books={books} type="comments"/>
          </div>
          <div className="column">
            <BookList name= "User rated" books={books} type="reviews"/>
          </div>

        </div>
        <BookGrid name="New Ongoing Release" books={books}/>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
