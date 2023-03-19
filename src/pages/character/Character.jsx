import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from "./arrow_back.svg"

const Character = () => {

  const {id} = useParams();
  const [character, setCharacter] = useState([])
  
  useEffect(() => {
    const data = fetch(`https://rickandmortyapi.com/api/character/${id}`);

    data.then((item) => item.json()).then(item => setCharacter(item))
    
  }, [])

  return (
    <>
      <Link to="/heroes" className='back'>
        <img src={arrow} className='back__arrow' alt='arrow'></img>
        <span className='back__text'>go back</span>
      </Link>
      <div className='container container--characters'>
        <div className='heading'>
          {character.image ? <img className='heading__image' src={character.image} alt={character.name}></img> : "Loading..."}
          <p className='heading__text'>{character.name}</p>
        </div>
        <div className='info'>
          <h1 className='info__title'>Information</h1>
          <div className='description'>
              <div className='description-row'>
                <p className='description-row__title'>Gender</p>
                <p className='description-row__text'>{character.gender}</p>
              </div>
              <div className='description-row'>
                <p className='description-row__title'>Status</p>
                <p className='description-row__text'>{character.status}</p>
              </div>
              <div className='description-row'>
                <p className='description-row__title'>Specie</p>
                <p className='description-row__text'>{character.species}</p>
              </div>
              <div className='description-row'>
                <p className='description-row__title'>Origin</p>
                <p className='description-row__text'>{character.origin ? character.origin.name : "Loading..."}</p>
              </div>
              <div className='description-row'>
                <p className='description-row__title'>Type</p>
                <p className='description-row__text'>{character.type ? character.type : "Unknown"}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Character