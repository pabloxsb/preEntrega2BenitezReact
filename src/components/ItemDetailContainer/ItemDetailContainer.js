import { useEffect, useState } from "react"
<<<<<<< HEAD
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const[product, setProduct] = useState()
    
=======
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
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1

    const {itemId} = useParams()
    
    useEffect(() => {
<<<<<<< HEAD
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = {id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })

    }, [itemId])

=======
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
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1

    return (
        <div>
        <h1>Detalle de producto</h1>
        <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer