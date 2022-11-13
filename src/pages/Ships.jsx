import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/movies.css'

const SingleShip = ({ name, manufacturer, starship_class, crew, uid }) => {
    return (
        <div className='movie' key={uid}>
            <div className="name">
                <Link to={'/ship/' + uid}><p className="title">{name}</p></Link>
                <p className='release_date'>{manufacturer}</p>
                <p className='director'>{crew}</p>
            </div>
            <p className='director'>{starship_class}</p>
        </div>
    );
}



export default function Ships() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://www.swapi.tech/api/starships?page=1&limit=50').then(response => response.json()).then(data => {
            if (data.message !== 'ok') {
                window.location.replace('/error')
            }
            setData(data.results)
            setLoading(false)
        }).catch(() =>
            window.location.replace('/error')
        );
    }, [])
    return (
        <div className="movies">
            {loading ? "Loading" :
                data.map((ship) => (
                    <SingleShip
                        name={ship.name}
                        uid={ship.uid}
                    />
                ))
            }
        </div>
    )
}
