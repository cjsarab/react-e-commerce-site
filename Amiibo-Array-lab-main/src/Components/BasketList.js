import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({basket}) => {

  const basketItems = basket.map((basketItem, index) => {
    return <BasketItem basketItem={basketItem} key={index} />
});

  return (
    <>
      <ul className="list">{basketItems}</ul>
    </>
  );
};

export default BasketList;