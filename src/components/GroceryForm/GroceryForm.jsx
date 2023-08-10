import axios from 'axios'
import {useState} from 'react'

function GroceryForm({fetchGroceries}) {
  const [newItem, setNewItem] = useState('')
  const [newQuantity, setNewQuantity] = useState(0)
  const [newUnit, setNewUnit] = useState('')

  const handleSubmit = (event) => {

    axios({
      method: "POST",
      url: "/list",
      data: {
        item: newItem,
        quantity: newQuantity,
        unit: newUnit
      }
    }).then((response) => {
      fetchGroceries()
      setNewItem("")
      setNewQuantity("")
      setNewUnit("")
    }).catch((error) => {
      console.log("Client POST error", error);
    });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Item:</label>
      <input onChange={(event)=>setNewItem(event.target.value)} value={newItem}/>

    </form>
  )
}





export default GroceryForm