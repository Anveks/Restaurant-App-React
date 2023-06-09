import { createStore } from "redux";

// 1. Product State - The application level state regarding products:
export class CartState {
  public cartItems: any[] = [];
  public totalSum: number = 0;
  public cartOpen: boolean = false;
}

// 2. Products action type - which actions we can perform on our products' global state
export enum CartActionType {
  addItems,
  removeItems,
  openCart
}

// 3. Products Action - interface describing an object for performing one action on our global state:
export interface CartAction {
  type: CartActionType; // which operation we perform
  payload: any; // with what datatype 
}

// 4. Product Reducer - the main function performing the needed action.
export function cartReducer(currentState = new CartState(), action: CartAction): CartState {

   const newState = {...currentState};

   switch(action.type){
    case CartActionType.addItems:  
      const exists = newState.cartItems.some((item) => item.itemId === action.payload.itemId);
      
        if (!exists) {
          newState.cartItems.push(action.payload); // id doesnt exist - push
        } else {
          const existingItem = newState.cartItems.find((item) => item.itemId === action.payload.itemId);
          existingItem.amount += action.payload.amount; // if exists - update amount
        }     
        
      const amounts = Array.from(newState.cartItems.map((item) => { return item.price * item.amount })); // get all the sums per item
      newState.totalSum = amounts.reduce((acc, cur) => acc + cur, 0); // multiply   
      break;

    case CartActionType.openCart:
      newState.cartOpen = action.payload;
      console.log(newState.cartOpen);
      break;
   }

   return newState;
}

// 5. Products Store - the main object (= the manager object) handling redux:
export const cartStore = createStore(cartReducer);
