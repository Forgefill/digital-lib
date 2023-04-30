import { useState } from 'react';
import './HomePage.css';
import '../page.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BookGrid from '../../Components/BookList/BookGrid';


function HomePage() {
  return (
    <div className="page" >
          <Navbar/>
          <div className = "container">
            <BookGrid name="New Ongoing Release"/>
            <BookGrid name="New Ongoing Release"/>
            <BookGrid name="New Ongoing Release"/>
            <BookGrid name="New Ongoing Release"/>
          </div>
          <Footer/>
    </div>
  );
}

export default HomePage;
