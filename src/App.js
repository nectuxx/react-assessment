import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header, Footer} from './components'
import {Home} from './pages'

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
