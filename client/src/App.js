import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from './redux/actions';
import './App.css';

import Nav from './components/NavBar/Nav'
import Card from './components/Card/Card'

function App() {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    console.log(characters[0]?.map(i => i.nombre));
  }, [characters]);

  return (
    <div className="App">

      <Nav></Nav>
      <Card/>

      
    </div>
  );
}

export default App;
