import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { MyContext } from "../../context/GlobalState"

export default function AddNewTransaction (){
    const {addAction} = useContext(MyContext)

    const [form,setForm] = useState({
        id: 80,
        text: '',
        amount: ''
    })

    function changeHanlder(event,type){
        const value = event.target.value;
        setForm((preValue)=>
        ({
            ...preValue,
            [type]: value
        })
        )
    }

    function submitHandler(event){
        event.preventDefault();
        form.amount=Number(form.amount)
        addAction(form)
        setForm((pre)=>({
            id: [pre.id]+1,
            text: '',
            amount: ''
        }))
    }

    useEffect(()=>{
        console.log(form)
    },[form])

    return <div>
        <h3>add new transaction</h3>
        <form >
            <label>Text</label>
            <br/>
            <input value={form.text} onChange={(e)=>{changeHanlder(e,'text')}}></input>
            <br/>
            <label>Amount</label>
            <br/>
            <input value={form.amount} onChange={(e)=>{changeHanlder(e,'amount')}}></input>
            <br/>
            <button onClick={(e)=>{submitHandler(e)}}>Add</button>
        </form>
        </div>
}