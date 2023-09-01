
import './App.css'
import CustomerList from './components/CustomerList';
import Form from './components/Form'

import { useState } from 'react'


function App() {
  const [inputText, setInputText] = useState('');
  const [customerList, setCustomerList] = useState([]);

  return (
    <div>
      <h1>Customer List</h1>
      <Form inputText={inputText}
            setInputText={setInputText}
            customerList={customerList}
            setCustomerList={setCustomerList}
      />
      <CustomerList 
            customerList={customerList}
      />
      
    </div>
  )
}

export default App
