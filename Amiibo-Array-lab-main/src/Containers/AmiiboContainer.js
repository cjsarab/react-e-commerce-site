import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from '../Components/ui/NavBar';
import AmiiboList from '../Components/AmiiboList';
import BasketList from '../Components/BasketList';

const AmiiboContainer = () => {

const [amiibos, setAmiibos] = useState([])
const [basket, setBasket] = useState([])

useEffect(() => {
  getAmiibos();
},[]);

const getAmiibos = function(){
    fetch("https://amiiboapi.com/api/amiibo/")
    .then(res => res.json())
    .then(data => setAmiibos(data.amiibo))
};

const onClickAddToBasket = (addAmiibo) => {
    const addToBasket = [...basket, addAmiibo];
    setBasket(addToBasket);
};

return (
  <>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<AmiiboList amiibos={amiibos} onClickAddToBasket={onClickAddToBasket} />} />
          <Route path='/basket' element={<BasketList basket={basket} amiibos={amiibos} />} />
        </Routes>
    </Router>
  </>
  );
};

export default AmiiboContainer;