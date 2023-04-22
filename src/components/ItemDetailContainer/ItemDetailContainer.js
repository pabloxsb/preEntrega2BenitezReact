import { useEffect, useState } from "react"
<<<<<<< HEAD
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../services/firebase/products"
import { useAsync } from "../../hooks/useAsync"



const ItemDetailContainer = () => {
    
    const {itemId} = useParams()

    const getProductsWithId = () => getProductsById(itemId)

    const { data: product, error, loading } = useAsync(getProductsWithId, [itemId])
    

=======
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
                .then(product =>{
                    setProduct(product)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() =>{
                    setLoading(false)
                })
    }, [itemId])

    if(loading) {
        return <h1>Cargando..</h1>
    }
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5

    return (
        <div>
        <h1>Detalle de producto</h1>
        <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer