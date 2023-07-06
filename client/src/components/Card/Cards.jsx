import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css';

export default function Cards(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const character = useSelector(state => state.characters);
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Ordenar
  const [sortBy, setSortBy] = useState('original');

  const currentCards = character
    .slice(indexOfFirstCard, indexOfLastCard)
    .sort((a, b) => {
      if (sortBy === 'nombre') {
        return a.nombre.localeCompare(b.nombre);
      } else if (sortBy === 'vida') {
        return b.vida - a.vida;
      } else if (sortBy === 'tipo') { // Nuevo bloque de ordenamiento por tipo
        return a.tipo[0].localeCompare(b.tipo[0]);
      } else {
        return 0;
      }
    });

  const totalPages = Math.ceil(character.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const previousPage = () => {
    if (currentPage >= 2) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleSortByNombre = () => {
    if (sortBy !== 'nombre') {
      setSortBy('nombre');
    }
  };

  const handleSortByOriginal = () => {
    if (sortBy !== 'original') {
      setSortBy('original');
    }
  };

  const handleSort = () => {
    if (sortBy !== 'vida') {
      setSortBy('vida');
    }
  };

  const handleSortByTipo = () => {
    if(sortBy != 'tipo'){
      setSortBy('tipo');

    }
  };

  return (
    <div className={styles.Cards}>
      <div className={`${styles.paginacion} `}>
        {currentPage >= 2 && (
          <button onClick={previousPage}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}

        {currentPage < totalPages && (
          <button onClick={nextPage}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        )}
      </div>
          
      <div className={styles.filters}>
        <button
          onClick={handleSortByOriginal}
          className={`${styles.filterButton} ${
            sortBy === 'original' ? styles.active : ''
          }`}
        >
          Original
        </button>
        <button
          onClick={handleSortByNombre}
          className={`${styles.filterButton} ${
            sortBy === 'nombre' ? styles.active : ''
          }`}
        >
          A-Z
        </button>
        <button
          onClick={handleSort}
          className={`${styles.filterButton} ${
            sortBy === 'vida' ? styles.active : ''
          }`}
        >
          +HP
        </button>
        <button
          onClick={handleSortByTipo}
          className={`${styles.filterButton} ${
            sortBy === 'tipo' ? styles.active : ''
          }`}
        >
          Tipo
        </button>       </div>

      <div className={styles.card}>
        {character ? (
          character[0] ? (
            currentCards.map((character, index) => (
              <Card
                key={index}
                id={character.id}
                name={character.nombre}
                imagen={character.imagen}
                vida={character.vida}
                ataque={character.ataque}
                habilidad={character.habilidad}
                tipos={character.tipo[0]}
              ></Card>
            ))
          ) : (
            <p className={styles.p_agregar}>No has agregado personajes</p>
          )
        ) : (
          <h1>Cargando personajes...</h1>
        )}
      </div>
    </div>
  );
}
