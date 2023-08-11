import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

import GroceryForm from '../GroceryForm/GroceryForm.jsx';
import ListItem from './ListItem/ListItem.jsx';
import DeleteListBtn from './DeleteListBtn/DeleteListBtn.jsx';
import ResetPurchaseBtn from './ResetPurchaseBtn/ResetPurchaseBtn.jsx';

function App() {

  const [shoppingList, setShoppingList] = useState([]);

  // GET items from the server / database
  const fetchGroceries = () => {
    axios({
      method: 'GET',
      url: '/list'
    }).then((response) => {
      console.log('Response Data | ', response.data)
      setShoppingList(response.data)
    }).catch((error) => {
      console.log('GET Error | ', error)
    })
  }
  
  useEffect( () => {
    fetchGroceries()
  }, []);
  
  return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <GroceryForm fetchGroceries={fetchGroceries}/>
                <DeleteListBtn fetchGroceries={fetchGroceries}/>
                <ResetPurchaseBtn fetchGroceries={fetchGroceries}/>
                <ListItem shoppingList={shoppingList} fetchGroceries={fetchGroceries}/>
            </main>
        </div>
    );
}

export default App;
