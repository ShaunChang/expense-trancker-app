import { useContext } from "react"
import { MyContext } from "../../context/GlobalState"


export default function HistoryList(){
    const {transactions} = useContext(MyContext)

    return (
    <ul>
        {transactions.map((transaction)=>(<li key={transaction.id}>{transaction.text}    {transaction.amount}</li>))}
    </ul>
    )
}