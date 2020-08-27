import React from "react";
import "./App.css";
import Header from "./compoenents/Header";
import Balance from "./compoenents/Balance";
import IncomeExpenses from "./compoenents/IncomeExpenses";
import TransactionList from "./compoenents/TransactionList";
import AddTransaction from "./compoenents/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
