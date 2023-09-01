import React from 'react'

const CustomerList = ({customerList}) => {
  return (
    <div>
        <ul data-test-id="customer-list">
        {customerList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CustomerList