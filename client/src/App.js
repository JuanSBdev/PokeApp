import './App.css';

import Nav from './components/NavBar/Nav'
import Cards from './components/Card/Cards';
import {Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation()
  return (
    <div className="App">
              <Nav/>
    <Routes>
              <Route path='/home'component={<Cards/>} />
    </Routes>
      
    </div>
  );
}

export default App;
