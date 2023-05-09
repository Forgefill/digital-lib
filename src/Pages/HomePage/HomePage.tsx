import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookGrid from "../../Components/BookList/BookGrid";

function HomePage() {
  return (
    <div className="page">
      <Navbar />
      <BookGrid name="New Ongoing Release" />
      <BookGrid name="New Ongoing Release" />
      <BookGrid name="New Ongoing Release" />
      <BookGrid name="New Ongoing Release" />
      <Footer />
    </div>
  );
}

export default HomePage;
