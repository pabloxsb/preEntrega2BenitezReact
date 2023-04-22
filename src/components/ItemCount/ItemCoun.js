import { useState } from "react"

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
    

    return (
        <div>
            <h2>{quantity}</h2>
            <button onClick ={decrement}>restar</button>
            <button onClick ={increment}>sumar</button>
            <button onClick ={reset}>reiniciar</button>
            <button onClick={() => {
                    setQuantity(initial)
                    onAdd(quantity)
                }}>Agregar al carrito</button>
           
        </div>
    )
}

export default ItemCount