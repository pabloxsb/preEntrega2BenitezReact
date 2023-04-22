import limon from './components/imagen/limon.jpg'

const products = [
    {
        id: '1',
        name: 'Ciclido limon',
        price: '1200',
        category: 'ciclido',
        img: 'https://i.ytimg.com/vi/qtsVCkjk4j0/maxresdefault.jpg',
        stock:20,
        description: 'El típico para cíclidos del lago Tanganika, con muchos escondites formados con rocas y troncos (procurando que no liberen taninos), para que los individuos más débiles puedan esconderse.',
    },
    {id: '2', name: 'Ciclido joya roja', price: '1500', category: 'ciclido', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uwAu2ussUReKyNAaGLQqS8kCbDwOkj5NtN99V6Nj3w&s', stock: 15, description: 'Los peces ciclidos joyas   viven en África occidental desde el sur de Guinea hasta el centro de Liberia y se puede ver principalmente en los ríos donde nada en las aguas medias y bajas.'},
    {id: '3', name: 'Ciclido Cebra', price: '1300', category: 'ciclido', img:'https://www.aquariumcostadealmeria.com/wp-content/uploads/2018/08/shutterstock_665501710.gif', stock:10, description: 'El cíclido cebra tiene una forma mbuna "típica". La coloración depende de la población geográfica y del estado de ánimo de los peces'},
    {id: '4', name: 'Cidlido loro azul', price: '1000', category: 'ciclido', img:'https://fashion.decorexpro.com/images/article/croppedtop/450-255/2019/05/golubaya-ryba-popugaj-opisanie-i-rekomendacii-po-soderzhaniyu.jpg', stock: 10, description: 'Cíclido loro azul es original de Sudamérica y Centro América con aguas que oscilan entre temperaturas de 23ºC y 26ºC.'},
    {id: '5', name: 'Carpa Demekin', price: '2000', category: 'carpa', img:'https://i.pinimg.com/564x/56/db/4d/56db4dfc47ea7cf4cc765c10eecf6ce6.jpg', stock: 10, description: 'Cíclido loro azul es original de Sudamérica y Centro América con aguas que oscilan entre temperaturas de 23ºC y 26ºC.'},
    {id: '6', name: 'Carpa Cometa', price: '3000', category: 'carpa', img:'https://www.depeces.com/wp-content/uploads/2012/07/5.jpeg', stock: 10, description: 'Los peces cometa, tienen una aleta caudal única y lobulada, lo cual los convierte en peces muy rápidos y voraces, por lo que si lo quieres tener en tu acuario, es importante que mantengas a los peces cometa adultos juntos y separados de los peces más pequeños, más lentos y más pesados, ya que estos últimos podrían quedarse sin alimentarse debido a la rapidez de los otros.'},
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}