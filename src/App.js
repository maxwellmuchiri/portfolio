import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
     
      <header className="App-header">
     
       <Navbar />
        <main>
        <About />
        <Projects />
        <Contact />
      </main>
      </header>
    </div>
  );
}

export default App;
