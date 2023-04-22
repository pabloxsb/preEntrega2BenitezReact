import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Carusel from "../carusel/carusel"
import { useParams } from 'react-router-dom'
import { getProducts } from "../../services/firebase/products"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
      
        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
  
    }, [categoryId])

    if(loading) {
        return <h1 style={{color:'white'}}>Cargando...</h1>
    }

    if(error){
        return <h1>Vuelva a cargar la pagina</h1>
    }

    if (products && products.length === 0) {
        return <h1>No hay stock</h1>
    }

    
    return (
        <div>
            <Carusel/>
             <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer