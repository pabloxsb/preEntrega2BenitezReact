import { useState } from "react"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
const ItemCount =({onAdd, stock, initial = 1}) => {
    const [quantity, setQuantity] = useState(initial)
  

    const decrement = () => {
      
        if(quantity > 1) {
            setQuantity(quantity - 1)
        } 
        
    }
    const increment = () => {
    
        if(quantity < stock) {
            setQuantity (quantity + 1)
        } 
    }

    const reset = () => {
        setQuantity (initial)
      
    }
<<<<<<< HEAD
=======
=======
const ItemCount =(onAdd) => {
    const [count, setCount ] = useState (1)

    const decrement = () => setCount(prev => prev - 1)

    const increment = () => setCount(prev => prev + 1)
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
    

    return (
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
            <h2>{quantity}</h2>
            <button onClick ={decrement}>restar</button>
            <button onClick ={increment}>sumar</button>
            <button onClick ={reset}>reiniciar</button>
            <button onClick={() => {
                    setQuantity(initial)
                    onAdd(quantity)
                }}>Agregar al carrito</button>
           
<<<<<<< HEAD
=======
=======
            <h2>{count}</h2>
            <button onClick ={decrement}>restar</button>
            <button onClick ={increment}>sumar</button>
            <button onClick={() => onAdd(count)}>Agregar al carro</button>
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
        </div>
    )
}

export default ItemCount