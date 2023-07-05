import React, { useEffect, useState } from 'react';
import styles from "./Details.module.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
  const { id } = useParams();
  const URL = `http://localhost:3001/info/`;
  const character = useSelector((state) => state.character);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL + id);
        const responseData = response.data;
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL]);

  return (
    <div>
      {data && (
        <div className={styles.container}>
             <div className={styles.datos}>
                   <h1> {data.nombre}</h1>
                   <p>Ataque {data.ataque}</p>
                   <p>Defensa {data.defensa}</p>
                   <p>HP {data.vida}</p>
                   <p>habilidad {data.habilidad}</p>
                   <p>Tipo {data.tipo.slice(',').join(' ')}</p>
                   <p> Height {data.height} ft.</p>
                   <p>weight {data.weight} kg</p>
                  <p> id {data.id}</p>
             </div>
             <div className={styles.imagenes}>
                  <img src={data.imagen} alt="" />
                  <img src={data.imagen2} alt="" />
             </div>

        </div>
              
      )}
    </div>
  );
}
