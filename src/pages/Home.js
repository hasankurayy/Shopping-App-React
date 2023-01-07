import React from 'react'
import AdvertisementsData from "../advertisementsData"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

function Home({addToBasket}) {

    const navigate = useNavigate()

    const settings_advertisement = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 4000,
    };

    const settings_flashDeals = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };

    return (
        <main>
            <div className="pg-header">
                <div className="container">
                    <h1>Welcome to HasanBurada.com</h1>
                </div>
            </div>
            <div className="container content">
                <div className="advertisements">

                    <div className="advertisement">
                        <Slider {...settings_advertisement}>
                            {AdvertisementsData.map((value, index) => {
                                console.log(value)
                                return (
                                    <div key={index} className="advert-item">
                                        <div className="left">
                                            <h1>50% Off For Your First Shopping</h1>
                                            <p>{value.details}</p>
                                            <button onClick={() => navigate("/dash/products")}>Visit Products</button>
                                        </div>
                                        <div className="right">
                                            <img src={value.image} alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="flash-deals mt">
                        <div className="heading">
                            <i className="fa fa-bolt"></i>
                            <h1>Flash Deals</h1>
                        </div>
                        <Slider {...settings_flashDeals}>
                            {AdvertisementsData.map((value, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <div className='flash-deals-item'>
                                            <div className="row-1" onMouseUp={() => navigate(`/dash/products/${value.id}`)}>
                                                <div className="discount">%{value.discount} Off</div>
                                                <img src={value.image} alt="" />
                                            </div>
                                            <div className="row-2">
                                                <div className='name'>{value.name}</div>
                                                <div className="stars">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="price-button">
                                                    <div className="price">
                                                        {value.price}
                                                    </div>
                                                    <button onClick={() => addToBasket(value)}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="new-arrivals mt">
                        <div className="heading">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt=''/>
                            <h2>New Arrivals</h2>
                        </div>
                        <div className="new-arrivals-content">
                            {AdvertisementsData.map((value,index) => {
                                return(
                                    <div className="new-arrivals-item" onClick={() => navigate(`/dash/products/${value.id}`)}>
                                        <img src={value.image} alt="" />
                                        <div className="name">{value.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home