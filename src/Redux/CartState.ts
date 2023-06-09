import { createStore } from "redux";
import { handleLocalStorage } from "../Services/LocalStorageService";

// 1. Product State - The application level state regarding products:
export class CartState {
  public cartItems: any[];
  public totalSum: number;
  public cartOpen: boolean = false;

  public constructor() {
    this.cartItems = handleLocalStorage("localCartItems", 'get');
    this.totalSum = this.cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
  }
}

// 2. Products action type - which actions we can perform on our products' global state
export enum CartActionType {
  addItems,
  openCart,
  handleCartAmount
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
          handleLocalStorage("localCartItems", 'update', newState.cartItems);
        } else {
          const existingItem = newState.cartItems.find((item) => item.itemId === action.payload.itemId);
          existingItem.amount += action.payload.amount; // if exists - update amount
          handleLocalStorage("localCartItems", 'update', newState.cartItems);
        }     
        
      const amounts = Array.from(newState.cartItems.map((item) => { return item.price * item.amount })); // get all the sums per item
      newState.totalSum = amounts.reduce((acc, cur) => acc + cur, 0); // multiply   
      break;

    case CartActionType.openCart:
      newState.cartOpen = action.payload;
      break;
     
    case CartActionType.handleCartAmount:
      // get the needed item
      const item = newState.cartItems.find((item) => item.itemId === action.payload.cartItem.itemId);
      
      if(action.payload.action === 'add' ){
        item.amount++;
        newState.totalSum += item.price;
        handleLocalStorage("localCartItems", 'update', newState.cartItems);        
      } else {
        item.amount--;
        newState.totalSum -= item.price;
        handleLocalStorage("localCartItems", 'update', newState.cartItems);
        
        // if amount is zero - remove the item from cartItems arr
        if (item.amount === 0) {
          const newCartItems = newState.cartItems.filter((i) => i !== item);         
          newState.cartItems = newCartItems;
          handleLocalStorage("localCartItems", 'update', newState.cartItems);
        }         
      }

      if (newState.cartItems.length === 0) {
        newState.cartOpen = false;
        handleLocalStorage("localCartItems", 'remove');
      }
      
   }

   return newState;
}

// 5. Products Store - the main object (= the manager object) handling redux:
export const cartStore = createStore(cartReducer);
