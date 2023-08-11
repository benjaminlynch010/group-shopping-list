import axios from "axios"


function DeleteListBtn({ fetchGroceries }) {
    const deleteAll = () => {
        axios.delete('/list')
            .then((response) => {
                console.log('List Deleted');
                fetchGroceries();
            })
            .catch((error) => {
                console.log('Error in DELETE all client/ list', error)
            })
    }

    return (
        <button onClick={deleteAll}>Delete List</button>
    )
}

export default DeleteListBtn