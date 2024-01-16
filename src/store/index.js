// Create the store
import { amountReducer } from './amount/reducer';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

const initialState = {
    amount: 0
}

export const debitCardSlice = createSlice({
    name: 'debitCard',
    initialState,
    reducers:  {
        deposit: (state, action) => {
            return {
                ...state,
                amount: state.amount + action.payload
            }
        },
        withdraw: (state, action) => {
            return {
                ...state,
                amount: state.amount - action.payload
            }
        }
    }
  });
  
export const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState,
    reducers:  {
        deposit: (state, action) => {
            return {
                ...state,
                amount: state.amount + action.payload
            }
        },
        withdraw: (state, action) => {
            return {
                ...state,
                amount: state.amount - action.payload
            }
        }
    }
});

const reducers = combineReducers({ 
    debitCard: debitCardSlice.reducer,
    creditCard: creditCardSlice.reducer
})
export const store = configureStore({ reducer: reducers });