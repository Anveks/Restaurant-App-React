import { createStore } from "redux";

// 1. Product State - The application level state regarding products:
export class CartState {
  public cartItems: any[] = [];
  public totalSum: number = 0;
}

// 2. Products action type - which actions we can perform on our products' global state
export enum CartActionType {
  addItems,
  removeItems
}

// 3. Products Action - interface describing an object for performing one action on our global state:
export interface CartAction {
  type: CartActionType; // which operation we perform
  payload: any; // with what datatype 
}

// 4. Product Reducer - the main function performing the needed action.
export function cartReducer(currentState = new CartState(), action: CartAction): CartState {

   const newState = {...currentState};

   // perform the needed action on the new state 
   switch(action.type){
    case CartActionType.addItems:  
          
          if(newState.cartItems.length > 0){
              // getting the  existing index
              const existingItemIndex = newState.cartItems.findIndex((i) => i.itemId === action.payload.itemId);
              // getting the existing item
              const existingItem = newState.cartItems[existingItemIndex];
              
              if(existingItem){
                newState.cartItems[existingItemIndex].amount = newState.cartItems[existingItemIndex].amount + action.payload.amount;
                newState.totalSum = newState.totalSum + newState.cartItems[existingItemIndex].amount * action.payload.price;
                console.log(newState.totalSum);
              }           
              
          } else {
            newState.cartItems.push(action.payload);
          }
          console.log(newState.cartItems);
          break;
   }

   return newState;
}

// 5. Products Store - the main object (= the manager object) handling redux:
export const cartStore = createStore(cartReducer);
