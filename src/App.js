import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Pricing from './components/Pricing';
import Description from './components/Description';
import './App.css';
import Gig from './components/Gig.js';
import PreviousWork from './components/PreviousWork.js';
import Contact from './components/Contact.js'

function App() {
  return (
    <Router>
         
                <div className="app">
                    <Sidebar />
                    
                    
                </div>
                <Routes>
                    <Route  path="/" element={<Description/>}  />
                    <Route  path="/pricing" element={<Pricing/>} />
                    <Route path="/gig" element={<Gig />} />
                    <Route path="/previouswork" element={<PreviousWork/>} />
                    <Route path="/contact" element={<Contact/>} />

                </Routes>
        </Router>
  );
}

export default App;
