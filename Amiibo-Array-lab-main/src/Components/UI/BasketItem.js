import React from 'react'

const BasketItem = ({basketItem}) => {
  return (
    <>
    <li>AmiiboSeries: {basketItem.amiiboSeries} </li>
    <li>Character: {basketItem.character}</li>
    <li>Game Series:{basketItem.gameSeries}</li>
    <li>Name:{basketItem.name}</li>
    <img src={basketItem.image} alt="Image" />
    <hr></hr>
    <br></br>
    </>
  )
}

export default BasketItem