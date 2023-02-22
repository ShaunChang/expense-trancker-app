import { useState } from "react";
import { useContext, useEffect } from "react"
import { MyContext } from "../../context/GlobalState"


export default function Balance (){
    const {transactions} = useContext(MyContext);
    const [banlance,setBanlance] = useState(0)

    useEffect(()=>{
        const amountArr = transactions.map((transaction)=>transaction.amount)
        const ban = amountArr.reduce((ban,amount)=>ban+=amount,0)
        setBanlance(ban);
    })

    return <div>
        <h3>banlance</h3>
        <span>{banlance}</span>
        </div>
}