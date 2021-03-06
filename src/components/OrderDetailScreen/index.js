import React from 'react';
import { Link, useParams } from 'react-router-dom';
import sum from 'lodash/sum';
import values from 'lodash/values';

import EMPANADAS_LIST from '../empanadas.json';
import Button from '../Button';

function OrderDetailScreen({ state, dispatch }) {
  const { name } = useParams();
  const order = state.orders.find(order => order.name === name);

  return (
    <div>
      <div className="row center middle">
        <Link to={`/`} className="m-right-2">
          {'<'}
        </Link>
        <h2>{name} (${sum(values(order.empanadas)) * 30})</h2>
      </div>
      {EMPANADAS_LIST.map(empanada => (
        <div className="row center middle" key={empanada.id}>
          <p className="m-right-2" >
            {order.empanadas[empanada.id] || 0} {empanada.name}
          </p>
          <Button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', name, id: empanada.id })}
          >
            -
          </Button>
          <Button
            onClick={() => dispatch({ type: 'ADD_ITEM', name, id: empanada.id })}
          >
            +
          </Button>
        </div>
      ))}
    </div>
  );
}

export default OrderDetailScreen;
