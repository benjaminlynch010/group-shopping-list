import axios from "axios";

function PurchasedBtn({fetchGroceries, itemId}){
    const purchaseStatus =() => {
        axios.put(`/list/singleitem/${itemId}`)
        .then((response) =>{
            console.group('Item purchased');
            fetchGroceries();
        })
        .catch((error) => {
            console.log("error in PUT/ purchase", error)
        })
    }
    return(
        <button onClick={purchaseStatus}>Purchased</button>
    )
}
export default PurchasedBtn;