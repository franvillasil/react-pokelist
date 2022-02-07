import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Pokemon from './Pokemon';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}


const App = (AppProps, AppState) => {
  const {name} = AppState;

  useEffect(() => {
    console.log("hola");

    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(results => results.json())
      .then(data => {
        console.log(data);
    });
  }, []);


    return (
      <div>
        <Pokemon name={'name'} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  

}

render(<App />, document.getElementById('root'));
