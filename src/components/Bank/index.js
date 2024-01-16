import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../store/amount/action";
import { debitCardSlice } from "../../store";
import { creditCardSlice } from "../../store";

const Bank = () => {
    //get the amount from redux
    const debitAmountFromSelector = useSelector((state) => state.debitCard.amount);
    const creditAmountFromSelector = useSelector((state) => state.creditCard.amount);

    const dispatch = useDispatch();
    
    const { deposit: debitCardDeposit, withdraw: debitCardWithdraw } = debitCardSlice.actions;
    const { deposit: creditCardDeposit, withdraw: creditCardWithdraw } = creditCardSlice.actions;

    const handleDebitDeposit = () => {
        //Dispatch deposit action
        dispatch(debitCardDeposit(10));
    }

    const handleDebitWithdraw = () => {
        //Dispatch withdraw action
        dispatch(debitCardWithdraw(10));
    }

    const handleCreditDeposit = () => {
        //Dispatch deposit action
        dispatch(creditCardDeposit(10));
    }

    const handleCreditWithdraw = () => {
        //Dispatch withdraw action
        dispatch(creditCardWithdraw(10));
    }
    
    return (
        <div>
            <div>
                <h1>Debit Amount: {debitAmountFromSelector}</h1>
                <button onClick={handleDebitDeposit}>Deposit $10</button>
                <button onClick={handleDebitWithdraw}>Withdraw $10</button>
            </div>
            <div>
                <h1>Credit Amount: {creditAmountFromSelector}</h1>
                <button onClick={handleCreditDeposit}>Deposit $10</button>
                <button onClick={handleCreditWithdraw}>Withdraw $10</button>
            </div>
       </div>
       
    );
};

export default Bank;