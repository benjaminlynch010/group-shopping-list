import axios from 'axios'


function DeleteItemBtn({ fetchGroceries, itemId}) {
    const deleteItem = () => {
        axios.delete(`/list/singleitem/${itemId}`)
            .then((response) => {
                console.log('Item Deleted');
                fetchGroceries();
            })
            .catch((error) => {
                console.log('Error in DELETE item all client/ list', error)
            })
    }

    return (
        <button onClick={deleteItem}>Delete</button>
    )
}

export default DeleteItemBtn;