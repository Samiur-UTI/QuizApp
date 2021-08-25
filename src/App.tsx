import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'
import Navbar from './components/navbar/navbar';
import './App.scss'
const App : React.FC = () =>{
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
