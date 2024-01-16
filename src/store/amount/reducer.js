// Create the reducer
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    amount: 0
}

export const amountReducer = createReducer(initialState, (builder) => {
    builder
      .addCase('DEPOSIT_MONEY', (state, action) => {
          return {
              ...state,
              amount: state.amount + action.payload
          }
      })
      .addCase('WITHDRAW_MONEY', (state, action) => {
        return {
            ...state,
            amount: state.amount - action.payload
        }
      }).addDefaultCase((state) => {
        return state;
      });
});

// const amountReducer = (state, action) => {
//     if(action.type === "DEPOSIT_MONEY"){
//         return {
//             ...state,
//             amount: state.amount + 10
//         }
//     }
//     if(action.type === "WITHDRAW_MONEY"){
//         return {
//             ...state,
//             amount: state.amount - 10
//         }

//     }
//     return state;
// }