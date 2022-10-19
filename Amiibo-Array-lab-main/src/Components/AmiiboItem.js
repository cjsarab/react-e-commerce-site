import React from 'react';

const AmiiboItem = ({amiibo, onClickAddToBasket}) => {

    if (!amiibo){
        return <p>Loading...</p>
      };

      const handleClick = function (){
        onClickAddToBasket(amiibo)
      };

  return (
    <div>
        <li>AmiiboSeries: {amiibo.amiiboSeries} </li>
        <li>Character: {amiibo.character}</li>
        <li>Game Series:{amiibo.gameSeries}</li>
        <li>Name:{amiibo.name}</li>
        <img src={amiibo.image} alt="Image" />
        <button onClick={handleClick}>Add To Basket</button>
        <hr></hr>
        <br></br>
    </div>
  );
};

export default AmiiboItem;