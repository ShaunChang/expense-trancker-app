import React,{createContext} from 'react'
import { useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState =  {
    transactions: [
        {id: 1, amount: +10000,text: 'salary'},
        {id: 2, amount: -10,text: 'buy food'},
        {id: 3, amount: -200,text: 'buy beer'}
    ]
}

export const MyContext = createContext(initialState);

export default function GlobalState({children}){
    const [state, dispatch] = useReducer(AppReducer,initialState)

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }

    function addAction(tranction){
        dispatch(
            {
                type: "ADD_TRANSACTION",
                payload: tranction
            }
        )
    }

    return (
        <MyContext.Provider 
            value={{
            transactions: state.transactions,
            deleteTransaction,
            addAction
            }}
        >
            {children}
        </MyContext.Provider>
    )
}