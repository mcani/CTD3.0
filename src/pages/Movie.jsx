import React, { useState, useEffect } from 'react'
import {
  Link,
  useParams
} from "react-router-dom";
import '../styles/movie.css'

function RefShip({ uid, name }) {
  return (
    <div className="refships">
      <Link to={`/ship/${uid}`}><p className="name">{name}</p></Link>
    </div>
  )
}


export default function Movie() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/films/${id}`).then(response => response.json()).then(data => {
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
    <>
      {loading ? "Loading..." : (
        <>
          <div>{data.properties.title}</div>
          <div>{data.properties.opening_crawl}</div>
          <p>SHIPS:</p>
          <div className="refships">
            {data.properties.starships.map((ship, key) => (
              <RefShip name={key+1} uid={ship.split('/').pop()} />
            ))}
          </div>
        </>
        )}
    </>
  )
}
