import './App.css';
import {  Routes, Route, Switch, Link, useLocation } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Cards from './components/Card/Cards';
import FormCrear from './components/crear/FormCrear';
import Detail from './components/Details/Details';
import Welcome from './components/Welcome/Welcome';


function App() {

let path = useLocation()

  return (
    <div className="App">
       { path.pathname !== '/' && <Nav/>}
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path="/home" element={<Cards/>} />
          <Route path="/create" element={<FormCrear/>} />
          <Route path='/detalle/:id' element={<Detail />} />

        </Routes>
    </div>
    
  );
}

export default App;
