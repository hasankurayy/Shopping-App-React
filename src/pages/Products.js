import React from 'react'
import { Link } from 'react-router-dom'
import PRODUCTS from "../data"

function Products() {
  return (
    <main className='products-main'>
        <div className="pg-header">
            <div className="container">
                <div className="row alignitems center">
                    <div className="col-lg-7">
                        <h1>PRODUCTS</h1>
                    </div>
                    <div className="col-lg-5">
                        <nav>
                            <ol className='breadcrumb justify-content-end'>
                                <li className='breadcrumb-item'>
                                    <Link to="home">Home</Link>
                                </li>
                                <li className='breadcrumb-item active'>
                                    Products
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div className="container content">
            <div className="row products-row">
                {PRODUCTS.map(product => (
                    <div className='col-lg-4' key={product.id}>

                        <div className="card">
                            <div className="img-wrap">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className='card-title'>{product.name}</h5>
                                <p className='card-text'>{product.details}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className='price'>Price: <strong>{product.price}</strong> </span>
                                    <Link to={`${product.id}`} className="btn btn-primary btn-sm"
                                    style={{borderRadius: "0"}}>DETAILS &#8594;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>
  )
}

export default Products