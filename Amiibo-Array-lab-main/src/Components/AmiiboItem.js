import React from 'react'

const AmiiboItem = ({amiibo, onClickAddToBasket}) => {

    if (!amiibo){
        return <p>Loading...</p>
      }
      const handleClick = function (){
        onClickAddToBasket(amiibo)
      }

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
  )
}

export default AmiiboItem




// "amiiboSeries": "Super Smash Bros.",
// "character": "Mario",
// "gameSeries": "Super Mario",
// "head": "00000000",
// "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
// "name": "Mario",
// "release": {
// "au": "2014-11-29",
// "eu": "2014-11-28",
// "jp": "2014-12-06",
// "na": "2014-11-21"
// },
// "tail": "00000002",
// "type": "Figure"