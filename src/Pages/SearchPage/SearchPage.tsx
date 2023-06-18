import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookSearch from "../../Components/BookSearch/BookSearch";
import BookGrid from "../../Components/BookList/BookGrid";
import { testBooks } from "../../httpRequests/bookApi";
import {useState} from 'react'

export function SearchPage() {

  const [isSearched, setIsSearched] = useState(false);


  return (
    <div className="page">
      <Navbar />
      <div className=" container">
        <div className="block" style={{ width: "100%" }} onClick={()=>setIsSearched(true)}>
          <BookSearch />
        </div>
      </div>

      <div className="box has-text-centered" style={{minHeight:'65vh', minWidth:'100vh'}}>
        {isSearched ? <BookGrid name="Result" books={testBooks}/> : <span className="title">Here would be  result of the search</span>}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
