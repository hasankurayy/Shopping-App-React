import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import Posts from "./pages/Posts"
import Error from "./pages/Error"
import Basket from "./pages/Basket"

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DashboardLayout from "./layouts/DashboardLayout"
import AuthLayout from "./layouts/AuthLayout"

function App() {

    const [basket, setBasket] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)



    const addToBasket = (singleProduct) => {
        const basketExist = basket.find((basketItem) => basketItem.id === singleProduct.id)
        if (basketExist) {
            basketExist.amount += 1;
            setBasket([...basket.filter((basketItem) => basketItem.id !== singleProduct.id), basketExist])
        } else {
            setBasket([...basket, { ...singleProduct, amount: 1 }])
        }
    }

    const removeFromBasket = (singleProduct) => {
        const basketExistt = basket.find((basketItem) => basketItem.id === singleProduct.id)
        basketExistt.amount -= 1
        if (basketExistt.amount === 0) {
            setBasket([...basket.filter((basketItem) => basketItem.id !== singleProduct.id)])
        } else {
            setBasket([...basket.filter((basketItem) => basketItem.id !== singleProduct.id), basketExistt])
        }
    }

    return (
        <div className="app">
            <BrowserRouter>
                
                <Routes>
                    <Route path="dash" element={<DashboardLayout basket={basket} setLoggedIn={setLoggedIn}/>}>
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="products" element={<Products />} />
                        <Route path="products/:productId" element={<SingleProduct addToBasket={addToBasket} removeFromBasket={removeFromBasket} />} />
                        <Route path="posts" element={<Posts />} />
                        <Route path="basket" element={<Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />} />
                    </Route>
                    <Route path="/" element={<AuthLayout />}>
                        <Route path="login" element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                        <Route path="register" element={<Register setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
    
            </BrowserRouter>
        </div>
    );
}

export default App;
