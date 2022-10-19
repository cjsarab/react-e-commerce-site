import React from 'react';
import AmiiboItem from './AmiiboItem';

const AmiiboList = ({amiibos , onClickAddToBasket}) => {

    const amiiboItems = amiibos.map((amiibo, index) => {
      return <AmiiboItem amiibo={amiibo} key={index} onClickAddToBasket={onClickAddToBasket}/>
    });

  return (
    <>
      <ul>{amiiboItems}</ul>
    </>
  );
};

export default AmiiboList;