import React from 'react';

const AmiiboItem = ({amiibo, onClickAddToBasket}) => {

    if (!amiibo){
        return <p>Loading...</p>
      };

      const handleClick = function (){
        onClickAddToBasket(amiibo)
      };

  return (
    <div className="item">
      <div className="item-inner">
        <div className="item-front">
          <img src={amiibo.image} alt="Image" />
        </div>
        <div className="item-back">
          <h1>{amiibo.name}</h1>
          <ul>
            <li>Series: {amiibo.amiiboSeries} </li>
            <li>Character: {amiibo.character}</li>
            <li>Game Series: {amiibo.gameSeries}</li>
            <li>Name: {amiibo.name}</li>
          </ul>
          <button className="add-button" onClick={handleClick}>Add to Basket</button>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default AmiiboItem;