import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'

const Checkout = () => {
  const itemsList = useSelector((state: RootState)=> state.cart.itemsList);
  
  console.log(itemsList);
  return (
    <div>
      {itemsList.map((item)=>(
        <div key={item.id}>
          {item.quantity}
        </div>
      ))}
    </div>
  )
}

export default Checkout