import React, { useState, useEffect } from 'react'
import {
  useParams
} from "react-router-dom";
import '../styles/movie.css'

export default function Ship() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/starships/${id}`).then(response => response.json()).then(data => {
      if (data.message !== 'ok') {
        window.location.replace('/error')
      }
      setData(data.result)
      setLoading(false)
    }).catch(()=>
      window.location.replace('/error')
    );
  }, [])
  return (
    <div className='ship'>
      {loading ? "Loading..." : (
        <div className='ship-content'>
          <p>Name: {data.properties.name}</p>
          <p>Manufacturer: {data.properties.manufacturer}</p>
          <p>Class: {data.properties.starship_class}</p>
          <p>Price: {data.properties.cost_in_credits}</p>
          <p>Crew: {data.properties.crew} members</p>
          <p>Pass: {data.properties.passengers} people</p>
          <p>Max Speed: {data.properties.max_atmosphering_speed}m/s</p>
        </div>
      )}
    </div>
  )
}
