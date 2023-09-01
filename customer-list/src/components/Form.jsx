import React from 'react'

import { useState } from 'react'

const Form = ({inputText, setInputText,customerList, setCustomerList}) => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const inputTextHandler =(e)=>{
      
    setInputText(e.target.value)
    if (inputText !== '') {
      setIsButtonDisabled(false);
    }
}

  const submitHandler=(e)=>{
    e.preventDefault();
    if (inputText !== '') {
      setCustomerList([...customerList, inputText])
      setInputText("");
      setIsButtonDisabled(true);
    }
    
    
}

  return (
    <>
    <form>
       <input type="text" value={inputText} onChange={inputTextHandler} autoFocus/> 
       <button type="submit" onClick={submitHandler} disabled={isButtonDisabled}>Add Customer</button>
    </form>
    
  </>
  )
}

export default Form