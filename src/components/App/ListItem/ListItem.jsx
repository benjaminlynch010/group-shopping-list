import ItemInfo from "./ItemInfo/ItemInfo"


function ListItem({ shoppingList, fetchGroceries }) {
    console.log('shoping list in List Item: ', shoppingList)
    return (
        <>
            <ItemInfo shoppingList={shoppingList} fetchGroceries={fetchGroceries} />
        </>
    )
}

export default ListItem