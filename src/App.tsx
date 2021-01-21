import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
