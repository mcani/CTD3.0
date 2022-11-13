import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/movies.css'

const SingleMovie = ({title, release_date, director, uid}) => {
  return (
    <div className='movie' key={uid}>
      <div className="name">
        <Link to={'/movie/'+uid}><p className="title">{title}</p></Link>
        <p className='release_date'>({release_date.slice(0,4)})</p>
      </div>
      <p className='director'>by {director}</p>
    </div>
  );
}



export default function Movies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://www.swapi.tech/api/films/').then(response => response.json()).then(data => {
      if (data.message !== 'ok') {
        window.location.replace('/error')
      }
      setData(data.result)
        setLoading(false)
    }).catch(() =>
      window.location.replace('/error')
    );
  }, [])
  return (
    <div className="movies">
      {loading ? "Loading" :
        data.map((film) => (
          <SingleMovie
            title={film.properties.title}
            director={film.properties.director}
            release_date={film.properties.release_date}
            uid={film.uid}
          />
        ))
      }
    </div>
  )
}
