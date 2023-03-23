import { useState } from "react"

const ItemCount =(onAdd) => {
    const [count, setCount ] = useState (1)

    const decrement = () => setCount(prev => prev - 1)

    const increment = () => setCount(prev => prev + 1)
    

    return (
        <div>
            <h2>{count}</h2>
            <button onClick ={decrement}>restar</button>
            <button onClick ={increment}>sumar</button>
            <button onClick={() => onAdd(count)}>Agregar al carro</button>
        </div>
    )
}

export default ItemCount