import { createStore } from "redux";

// 1. Product State - The application level state regarding products:
export class CartState {
  public cartItems: any[] = [];
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

          console.log(action.payload.amount);
          
          if(newState.cartItems.length > 0){
              const existingItemIndex = newState.cartItems.findIndex((i) => i.itemId === action.payload.itemId);
              const existingItem = newState.cartItems[existingItemIndex];
              console.log(existingItem);
              
              if(existingItem){
                const updatedItem = {
                  ...existingItem,
                  amount: existingItem.amount + action.payload.amount
                }
                console.log(newState.cartItems);
              }
              
          } else {
            newState.cartItems.push(action.payload)
          }
          break;
  
   }

   return newState;
}

// 5. Products Store - the main object (= the manager object) handling redux:
export const cartStore = createStore(cartReducer);
