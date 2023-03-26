import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
  
    <BrowserRouter>
        <NavigationBar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<>Not Found</>} />
        </Routes>
        <Footer></Footer>

    </BrowserRouter>
  
  );
}


export default App;
