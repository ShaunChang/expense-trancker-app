import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction'
import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import HistoryList from './components/HistoryList/HistoryList'
import IncomeAndExpense from './components/IncomeAndExpense/IncomeAndExpense'
import GlobalState from './context/GlobalState'

export default function App(){
  return(
    <GlobalState>
      <div>
        <Header/>
        <Balance />
        <IncomeAndExpense />
        <HistoryList />
        <AddNewTransaction />
      </div>
    </GlobalState>

  )  
}