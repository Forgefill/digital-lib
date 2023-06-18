import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookGrid from "../../Components/BookList/BookGrid";
import { testBooks } from "../../httpRequests/bookApi";
import BookList from "../../Components/BookList/BookList";

function HomePage() {


  return (
    <div className="page">
      <Navbar />
      <div className="box mt-2" style={{width:'80%'}}>
        <div className="columns">
          <div className="column">
            <BookList name= "Most Read" books={testBooks}/>
          </div>
          <div className="column">
            <BookList name= "New Trends" books={testBooks}/>
          </div>
          <div className="column">
            <BookList name= "User rated" books={testBooks}/>
          </div>

        </div>
        <BookGrid name="New Ongoing Release" books={testBooks}/>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
