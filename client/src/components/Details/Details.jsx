import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
  const { id } = useParams();
  const URL = `http://localhost:3001/info/${id}`;
  const character = useSelector((state) => state.character);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const responseData = response.data;
        setData(responseData);
        console.log(responseData.nombre);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL]);

  return (
    <>
      {data && <h1>{data.nombre}</h1>}
    </>
  );
}
