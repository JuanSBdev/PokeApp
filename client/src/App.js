import './App.css';
import {  Routes, Route, Switch, Link } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Cards from './components/Card/Cards';

function App() {
  return (
    <div className="App">

        <Nav/>
        <Routes>
          <Route path="/home" element={<Cards/>} />
          <Route path="/h" element={<Nav/>} />
        </Routes>
    </div>
    
  );
}

export default App;
