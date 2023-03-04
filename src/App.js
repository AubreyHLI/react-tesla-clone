import React, { useRef, useEffect, useState }from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TeslaAccount from './pages/TeslaAccount';
import ProtectedRoutes from './pages/ProtectedRoutes';
import ScrollToTop from './utils/scrollToTop';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appRef = useRef();

  useEffect(() => {
    if(isMenuOpen) {
        appRef.current.style.overflowY = 'hidden';  // lock the scroll of home page
    } else {
        appRef.current.style.overflowY = 'scroll';  // unlock the scroll of home page
    }
  }, [isMenuOpen] );
  

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="app" id="app" ref={appRef}>
            <Routes>
              <Route path="/" exact element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}/>
              <Route path="/teslaaccount" element={<ProtectedRoutes >
                <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
              </ProtectedRoutes>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
