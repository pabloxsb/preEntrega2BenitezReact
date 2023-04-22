import {addDoc, collection, getDoc, doc } from "firebase/firestore"
import { db } from "./firebaseConfig"
<<<<<<< HEAD
import { async } from "@firebase/util"
=======

>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1

export const createOrdenCompra = async (cliente) => {
    const ordenCompra = await addDoc(collection(db,'orders'),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular
    })
   
<<<<<<< HEAD
    console.log(cliente)
=======
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1

    return ordenCompra
}

export const getOrdenCompra =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "orders", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}