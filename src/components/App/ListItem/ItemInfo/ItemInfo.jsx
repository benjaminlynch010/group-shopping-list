function ItemInfo({ shoppingList }) {
    return (
        <div>
            {shoppingList?.map(item => (
                <div key={item.id}>
                    <div>{item.item} {item.quantity} {item.unit}</div>
                    {/* <DeleteButton studentId={student.id} getList={getList} /> */}

                </div>
            ))
            }
        </div>
    )
}

export default ItemInfo