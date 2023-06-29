import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from './redux/actions';
import './App.css';

import Nav from './components/NavBar/Nav'
import Cards from './components/Card/Cards';

function App() {


  // const character = useSelector(state => state.characters);

  //  let [characters, setCharacters ] = useState(character[0])
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCharacters()); 
  //   console.log(characters)
  // }, [dispatch]);

  return (
    <div className="App">

      <Nav></Nav>
      <Cards/>

      
    </div>
  );
}

export default App;
