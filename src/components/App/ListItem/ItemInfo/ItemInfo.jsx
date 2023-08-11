import DeleteItemBtn from "../../../DeleteItemBtn/DeleteItemBtn"
import PurchasedBtn from "../../PurchasedBtn/PurchasedBtn";

function ItemInfo({ shoppingList, fetchGroceries }) {
    return (
        <div>
            {shoppingList?.map(item => (
                <div key={item.id}>
                    <div>{item.item} {item.quantity} {item.unit}</div>
                    <DeleteItemBtn itemId={item.id} shoppingList={shoppingList} fetchGroceries={fetchGroceries} />
                    <PurchasedBtn itemId={item.id} shoppingList={shoppingList} fetchGroceries={fetchGroceries} />
                </div>
            ))
            }
        </div>
    )
}

export default ItemInfo;