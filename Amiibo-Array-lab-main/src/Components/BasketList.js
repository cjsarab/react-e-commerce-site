import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({basket, onClickDeleteFromBasket}) => {

  const basketItems = basket.map((basketItem, index) => {
    return <BasketItem basketItem={basketItem} key={index} onClickDeleteFromBasket={onClickDeleteFromBasket}/>
});

  return (
    <>
      <ul className="list">{basketItems}</ul>
    </>
  );
};

export default BasketList;