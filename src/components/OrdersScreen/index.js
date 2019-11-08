import React from 'react';
import names from '../names.json';
import Order from '../Order/index.js';
import Button from '../Button/index';
import sum from 'lodash/sum';
import values from 'lodash/values';

function OrdersScreen({ state, dispatch }) {
  function randomName() {
    const unusedNames = names.filter(name => !state.orders.map(order => order.name).includes(name));
    return unusedNames[Math.floor(Math.random() * unusedNames.length)];
  }

  return (
    <div>
      <h2>Pedidos</h2>
      {state.orders.map(order => (
        <Order key={order.name} name={order.name} empanadasAmount={sum(values(order.empanadas))} />
      ))}
      <Button onClick={() => dispatch({ type: 'ADD_ORDER', name: randomName() })} >
        Nuevo Pedido
      </Button>
      <Button onClick={() => dispatch({ type: 'CLEAR' })} >
        Limpiar
      </Button>
    </div>
  );
}

export default OrdersScreen;
