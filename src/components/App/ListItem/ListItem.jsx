import ItemInfo from "./ItemInfo/ItemInfo"

function ListItem({shoppingList}) {
    console.log('shoping list in List Item: ', shoppingList)
    return (
    <ItemInfo shoppingList={shoppingList}/>
    )
}

export default ListItem