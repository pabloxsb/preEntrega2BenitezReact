import { useState } from "react"

<<<<<<< HEAD
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
=======
const ItemCount =(onAdd) => {
    const [count, setCount ] = useState (1)

    const decrement = () => setCount(prev => prev - 1)

    const increment = () => setCount(prev => prev + 1)
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
    

    return (
        <div>
<<<<<<< HEAD
            <h2>{quantity}</h2>
            <button onClick ={decrement}>restar</button>
            <button onClick ={increment}>sumar</button>
            <button onClick ={reset}>reiniciar</button>
            <button onClick={() => {
                    setQuantity(initial)
                    onAdd(quantity)
                }}>Agregar al carrito</button>
           
=======
            <h2>{count}</h2>
            <button onClick ={decrement}>restar</button>
            <button onClick ={increment}>sumar</button>
            <button onClick={() => onAdd(count)}>Agregar al carro</button>
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
        </div>
    )
}

export default ItemCount