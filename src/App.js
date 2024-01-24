import imageRickMortin from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {   
     const api = await fetch("https://rickandmortyapi.com/api/character");
     const characteresApi = await api.json();
     
     setCharacters(characteresApi.results);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick and Mortin</h1>
        { characters ? 
          (<Characters characters={characters} setCharacters={setCharacters} />) 
          : 
            (<>
              <img src={imageRickMortin} className="img-home" alt="Rick & Mortin" />
              
              <button onClick={reqApi} className="btn-search">Buscar personajes</button>
            </>)
        }
      </header>
    </div>
  );
}

export default App;
