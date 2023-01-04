import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import PRODUCTS from '../data'

function SingleProduct({ addToBasket, removeFromBasket}) {

    const navigate = useNavigate()
    const {productId} = useParams()
    const {pathname} = useLocation()

    const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId))

    return (
        <main>
            <div className="pg-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1>{singleProduct.name}</h1>
                            <p>{pathname}</p>
                        </div>
                        <div className="col-lg-5">
                            <nav>
                                <ol className="breadcrumb justify-content-end">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="products">Products</Link></li>
                                    <li className="breadcrumb-item active">Page Title</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={singleProduct.image} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-7">
                        <h2>{singleProduct.name}</h2>
                        <p className="price"><strong>{singleProduct.price}</strong></p>
                        <p>{singleProduct.details} {singleProduct.details} {singleProduct.details}</p>

                        <br />
                        <button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>Back</button> &nbsp; {/* &nbsp sola margin ekler */}
                        <button className='btn btn-success btn-sm' onClick={() => addToBasket(singleProduct)}>Add to Basket</button> &nbsp; {/* &nbsp sola margin ekler */}
                        <button className='btn btn-danger btn-sm' onClick={() => removeFromBasket(singleProduct)}>Remove from Basket</button> &nbsp; {/* &nbsp sola margin ekler */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct