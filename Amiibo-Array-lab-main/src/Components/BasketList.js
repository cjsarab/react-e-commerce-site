import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({basket}) => {

  const basketItems = basket.map((basketItem, index) => {
    return <BasketItem basketItem={basketItem} key={index} />
});

  return (
    <>
      <ul>{basketItems}</ul>
    </>
  );
};

export default BasketList;