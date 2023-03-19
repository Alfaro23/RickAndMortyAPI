import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({person}) => {

   
    return (
        <Link className='card' to={`/heroes/${person.id}`}>
            <img src={person.image} className="card__image" alt={person.name}></img>
            <div className='card__text'>
                <p className='card__name'>{person.name}</p>
                <p className='card__species'>{person.species}</p>
            </div>
        </Link>
    )
}

export default Card