//Create deposit and withdraw actions

import { createAction } from "@reduxjs/toolkit"

// const deposit = () =>{
//     return {
//         type: "DEPOSIT_MONEY",
//         payload: 10
//     }
// }

// const withdraw = () =>{
//     return {
//         type: "WITHDRWAW_MONEY",
//         payload: 10
//     }
// }

const deposit = createAction('DEPOSIT_MONEY');
const withdraw = createAction('WITHDRAW_MONEY');

export { deposit, withdraw };