import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"
import { db } from "./firebaseConfig" 
<<<<<<< HEAD
=======
import { createAdaptedProductFromFirestore } from "../../adapters/createAdaptedProductFromFirestore"
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1


export const getProducts = (categoryId) => {
    const productsRef = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    return getDocs(productsRef)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
<<<<<<< HEAD
                return { id: doc.id, ...data }
=======
                return createAdaptedProductFromFirestore(doc)
>>>>>>> e2f7458d2c4889dbb5c0d9eebbb90ef1d181f8d1
            })

            return productsAdapted
        })

        .catch(error => {
            return error
        })
       

}

export const getProductsById = (itemId) => {

    const collectionProd = collection(db,"products")

    const productRef = doc(collectionProd,itemId)

    return getDoc(productRef)
    .then(result => {
            const productAdapted = {
                id:result.id,
                ...result.data()
            }
        
            return productAdapted
        })
        .catch(error => {
            return error
        })
}