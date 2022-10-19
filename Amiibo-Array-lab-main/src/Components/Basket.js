import React from 'react'
import { Link } from 'react-router-dom';
import BasketList from './UI/BasketList'

const Basket = () => {
  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
    <h1>Basket</h1>
    <div><BasketList/></div>
    <div></div>
    </>
  )
}

export default Basket