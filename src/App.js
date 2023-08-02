import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal () {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    const index = Math.floor(Math.random() * animals.length);
    return animals[index];
}
function App () {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }
    
    const renderedAnimals = animals.map((animal, index) => {
        return<AnimalShow type = { animal } key={ index } />
    });
    return <div className='app'>
        <button className='button-73' onClick={handleClick}>Add Animal</button>
        <div className='animalList'>{renderedAnimals}</div>
    </div>
}

export default App;