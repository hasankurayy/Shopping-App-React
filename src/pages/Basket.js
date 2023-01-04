import React from 'react'
import { Link } from "react-router-dom"

function Basket({ basket, addToBasket, removeFromBasket }) {

    var total = 0

    return (
        <main className='basket-main'>
            <div className="pg-header">
                <div className="container">
                    <div className="row alignitems center">
                        <div className="col-lg-7">
                            <h1>Basket</h1>
                        </div>
                        <div className="col-lg-5">
                            <nav>
                                <ol className='breadcrumb justify-content-end'>
                                    <li className='breadcrumb-item'>
                                        <Link to="home">Home</Link>
                                    </li>
                                    <li className='breadcrumb-item active'>
                                        Basket
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content">
                <div className='basket'>
                    <h2>Shopping Details</h2>
                    <div className='items'>
                        {basket && basket.map((basketItem) => (
                            <div className="item">
                                <div className="name">{basketItem.name}</div>
                                <div className="actions">
                                    <button onClick={() => addToBasket(basketItem)} className='btn btn-success btn-sm'>+</button>
                                    <button onClick={() => removeFromBasket(basketItem)} className='btn btn-danger btn-sm'>-</button>
                                </div>
                                <div className="amount-price">
                                    <span>{basketItem.amount} x </span>{basketItem.price}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total-price">
                        {basket.map((basketItem) => {
                            total += basketItem.price.split("$")[1] * basketItem.amount
                            console.log(total)
                        })}
                        <div className="name">
                            Total Price:
                        </div>
                        <div className="price">
                            {total} $
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Basket