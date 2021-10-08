// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [ cars, setCars ] = useState({
    red: false,
    blue: false,
    yellow: false,
});

/* class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  } */

  const moveCar = (car, side) => {
    setCars({
      ...cars,
        [car]: side,
      },
    );
  };

/*   render() {
    const context = {
      ...state,
      moveCar: this.moveCar,
    }; */

  const context = { cars, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;

// Passo 1 - Criei o meu contexto em CarsContext.js;
// Passo 2 - Criei o meu Provider com o estado inicial (state) dentro do hook useState. Fiz a função que altera a posição de cada carro (moveCar) através do setCars;
// Passo 3 - Descontrui o meu contexto com as variáveis cars e moveCar;
// Passo 4 - Passei o nome do meu contexto com o value da constante criada no passo 3;
// Passo 5 - Em Cars.jsx utilizei o hook useContext para utilizar as informações do meu Provider;