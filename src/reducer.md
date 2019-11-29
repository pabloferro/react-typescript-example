```ts
interface Order {
  id: number;
  name: string;
  empanadas: number[];
}

export interface AppState {
  orders: Order[];
}

export type AppActions = 
  { type: 'ADD_ORDER', name: string } |
  { type: 'ADD_ITEM', name: string, id: number} |
  { type: 'REMOVE_ITEM', name: string, id: number} |
  { type: 'CLEAR' }
```
