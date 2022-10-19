import React from 'react';

const BasketItem = ({basketItem}) => {

  // const handleClick = function (){
  //   onClickDeleteFromBasket(basketItem)
  // };

  return (
<div className="item">
  <div className="item-inner">
    <div className="item-front">
      <img src={basketItem.image} alt="Image" />
    </div>
    <div className="item-back">
      <h1>{basketItem.name}</h1>
      <ul>
        <li>Series: {basketItem.amiiboSeries} </li>
        <li>Character: {basketItem.character}</li>
        <li>Game Series:{basketItem.gameSeries}</li>
        <li>Name:{basketItem.name}</li>
      </ul>
      {/* <button className="delete-button" onClick={handleClick}>Delete from Basket</button> */}
    </div>
    <br></br>
  </div>
</div>

  );
};

export default BasketItem;