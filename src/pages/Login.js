import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Login({ loggedIn, setLoggedIn }) {

    const navigate = useNavigate()

    const [info, setInfo] = useState({
        email: " ",
        password: " "
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem(info.email)) 
        if(user){
            if(user.password === info.password){
                setLoggedIn(true)
            }
            else {
                alert("Wrong password.")
            }
        }
        else{
            alert("This e-mail is not registered.")
        }
    }

    useEffect(() => {
        loggedIn && navigate("/dash/home")
    }, [loggedIn])

    return (
        <main className='login-main'>
            <div className="pg-header">
                <div className="container">
                    <div className="row alignitems center">
                        <div className="col-lg-7">
                            <h1>Login</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content">
                <h1>Login</h1>
                <hr />
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="email">
                            <label>E-Mail</label> <br />
                            <input
                                type="email"
                                onChange={(e) => setInfo({ ...info, email: e.target.value })} />
                        </div>
                        <div className="password">
                            <label>Password</label> <br />
                            <input
                                type="password"
                                onChange={(e) => setInfo({ ...info, password: e.target.value })} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login