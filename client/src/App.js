import './App.css';
import {  Routes, Route, Switch, Link } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Cards from './components/Card/Cards';
import FormCrear from './components/crear/FormCrear';

function App() {
  return (
    <div className="App">

        <Nav/>
        <Routes>
          <Route path="/home" element={<Cards/>} />
          <Route path="/create" element={<FormCrear/>} />
        </Routes>
    </div>
    
  );
}

export default App;
