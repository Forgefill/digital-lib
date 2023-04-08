import { useState } from 'react';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';



function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token") != null);

  return (
    <div className="Home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {isLogin ? (
        <div>
        </div>
      ) : (
        <div>
          <Navbar/>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
