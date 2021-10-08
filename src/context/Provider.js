// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

/* class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  } */

  const Provider = ({ children }) => {
    const [cars, setCars] = useState({
      red: false,
      blue: false,
      yellow: false,
    })
    const [signal, setSignal] = useState({
      color: 'red',
    })

  const moveCar = (car, side) => {
    setCars({
      ...cars,
        [car]: side,
      },
    );
  };

  const changeSignal = (signalColor) => {
    setSignal({
        color: signalColor,
      },
    );
  };

/*   render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }; */

    const context = { cars, moveCar, changeSignal, signal }

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    )
  };

export default Provider;
