import axios from "axios"

function ResetPurchaseBtn({fetchGroceries}) {
    const resetAll = () => {
        axios.put('/list')
            .then((response) => {
                console.log('List Purchase updated for all');
                fetchGroceries();
            })
            .catch((error) => {
                console.log('Error in RESET PUT all client/ list', error)
            })
    }

    return (
        <button onClick={resetAll}>Reset Purchases</button>
    )
}

export default ResetPurchaseBtn