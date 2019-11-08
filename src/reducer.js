
export const DEFAULT_STATE = {
  orders: [
    { id: 1, name: 'Avatar Aang', empanadas: []},
  ]
};

let id = 1;

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, { id: id++, name: action.name, empanadas: [] }]
      };
    case 'ADD_ITEM':
      return {
        ...state,
        orders: state.orders.map(order => {
          if (order.name === action.name) {
            const empanadas = order.empanadas[action.id] || 0;
            return {
              ...order,
              empanadas: {
                ...order.empanadas,
                [action.id]: empanadas + 1
              }
            };
          }
          return order;
        })
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        orders: state.orders.map(order => {
          if (order.name === action.name) {
            const empanadas = order.empanadas[action.id] || 0;
            return {
              ...order,
              empanadas: {
                ...order.empanadas,
                [action.id]: Math.max(empanadas - 1, 0)
              }
            };
          }
          return order;
        })
      };
    case 'CLEAR':
      return DEFAULT_STATE;
    default:
      throw new Error();
  }
}
