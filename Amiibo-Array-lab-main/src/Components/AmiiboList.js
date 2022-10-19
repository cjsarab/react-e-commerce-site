import React from 'react';
import AmiiboItem from './AmiiboItem';
import styled from 'styled-components';

const AmiiboList = ({amiibos , onClickAddToBasket}) => {

    const amiiboItems = amiibos.map((amiibo, index) => {
      return <AmiiboItem amiibo={amiibo} key={index} onClickAddToBasket={onClickAddToBasket}/>
    });

  return (
    <>
      <ul className="list">{amiiboItems}</ul>
    </>
  );
};

export default AmiiboList;