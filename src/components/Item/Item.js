import card from '../Item/card.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Item = ({name, price, description, category, img, id}) => {

  
    return (
    
       <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="thumbnail m-3 p-3">
                    <div id="imgRotate" className="imgRotate">
                        <img src={img} alt="Imagen" className="card-img-top thumbnail__img"/>
                    </div>
                        <div className="card-body p-3 my-2">
                            <h2 className="card-title text-center">{name}</h2>
                                <p className="card-text">{category}</p>
                                <div className="card__precio d-flex align-items-center justify-content-between p-1">
                                    <span><strong>{`$${price}`}</strong></span>
                                    <Link to={`/item/${id}`} style={{color:'white'}}>Comprar</Link>
                                </div>
                        </div>
                </div>
        </div>
      
    )
}

export default Item