import { useState } from 'react';
import './homePage.css';
import '../page.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';



function HomePage() {
  return (
    <div className="page " >
          <Navbar/>
          {localStorage.getItem('token') ? <h1>Authorize</h1> : null}
          <Footer/>
    </div>
  );
}

export default HomePage;
