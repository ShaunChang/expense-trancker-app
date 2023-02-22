import React from 'react';
import { useContext } from 'react';
import styles from './IncomeAndExpense.module.css'
import { MyContext } from '../../context/GlobalState';
import { useState } from 'react';
import { useEffect } from 'react';


export default function IncomeAndExpense(){
    const {transactions} = useContext(MyContext)
    const [money,setMoney] = useState({income: 0,expense: 0})

    useEffect(()=>{
        const incomeValue = transactions
        .filter((transaction)=>transaction.amount>0)
        .reduce((incomeVal,{amount})=>(incomeVal+=amount),0)
        .toFixed(2);

        const expenseValue = (transactions
        .filter((transaction)=>transaction.amount<=0)
        .reduce((expenseVal,{amount})=>(expenseVal+=amount),0)* -1)
        .toFixed(2);

        console.log(incomeValue)
        console.log(expenseValue)

        setMoney({
            income:incomeValue,
            expense:expenseValue
        })    
    },[transactions])

    return <div>
        <h2>income and expense</h2>
        <div className={styles.IncomeAndExpenseContainer}>
            <div className={styles.IncomeOrExpense}>{money.income}</div>
            <div className={styles.IncomeOrExpense}>{money.expense}</div>
        </div>
        </div>
}