import React, {useEffect, useState} from 'react';
import Card from '../../components/Card/Card';
import logo from "./logo.png";
import icon from "./search-icon.svg";


const Main = () => {

    const [heroes, setHeroes] = useState([]);
    const [namePerson, setNamePerson] = useState("");

    useEffect(() => {
        const data = fetch("https://rickandmortyapi.com/api/character");

        data.then((item) => item.json()).then(item => setHeroes(item.results))
    }, [])

    const filteredPerson = heroes.filter(elem => {
        
        return elem.name.toLowerCase().includes(localStorage.getItem("name").toLowerCase())
    })

    return (
        <div className='container'>
            <header className='header'>
                <a href='#' className='header__link'>
                    <img src={logo} className='header__image' alt='logo'></img>
                </a>
                
            </header>
            <main className='main'>
                <div className='search'>
                    <img alt='search' src={icon}></img>
                    <input value={localStorage.getItem("name")} type="text" className='search__input' onChange={(e) => {
                                                                                                        localStorage.setItem("name", e.target.value)
                                                                                                        setNamePerson(localStorage.getItem("name")); 
                                                                                                        
                                                                                                    }} placeholder='Filter by name...'></input>
                </div>
                <div className='cards'>
                    {
                        filteredPerson.sort((a, b) => {
                            if(a.name < b.name){
                                return -1;
                            } 
                            if(a.name > b.name){
                                return 1;
                            } 
                            return 0;
                            
                        }).map(item => <Card key={item.id} person={item} />)
                    }
                </div>
            </main>
        </div>
  )
}

export default Main