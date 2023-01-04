import React, { useEffect, useState } from 'react'

function Register({ loggedIn, setLoggedIn }) {

    const [isRegistered, setIsRegistered] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsRegistered(false), 1500)
    }, [isRegistered])

    const [info, setInfo] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (info.password === info.passwordConfirm) {
            const emailExist = localStorage.getItem(info.email)
            if (emailExist) {
                alert("This e-mail already exist.")
            }
            else {
                localStorage.setItem(info.email, JSON.stringify(info))
                setInfo({
                    name: "",
                    surname: "",
                    email: "",
                    password: "",
                    passwordConfirm: ""
                })
                setIsRegistered(true)
            }
        }
        else {
            alert("passwords do not match")
        }

    }

    return (
        <main className='login-main'>
            <div className="pg-header">
                <div className="container">
                    <div className="row alignitems center">
                        <div className="col-lg-7">
                            <h1>Register</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content">
                <h1>Register</h1>
                <hr />
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <label>Name</label> <br />
                            <input
                                type="text"
                                required
                                value={info.name}
                                onChange={(e) => setInfo({ ...info, name: e.target.value })} />
                        </div>
                        <div className="surname">
                            <label>Surname</label> <br />
                            <input
                                type="text"
                                required
                                value={info.surname}
                                onChange={(e) => setInfo({ ...info, surname: e.target.value })} />
                        </div>
                        <div className="email">
                            <label>E-Mail</label> <br />
                            <input
                                type="email"
                                required
                                value={info.email}
                                onChange={(e) => setInfo({ ...info, email: e.target.value })} />
                        </div>
                        <div className="password">
                            <label>Password</label> <br />
                            <input
                                type="password"
                                required
                                value={info.password}
                                onChange={(e) => setInfo({ ...info, password: e.target.value })} />
                        </div>
                        <div className="passwordConfirm">
                            <label>Password Confirm</label> <br />
                            <input
                                type="password"
                                required
                                value={info.passwordConfirm}
                                onChange={(e) => setInfo({ ...info, passwordConfirm: e.target.value })} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

            {isRegistered && (
                <div className="register-success">
                    <img src="https://png.vector.me/files/images/1/7/178682/green_checkmark_clip_art.jpg" alt="" />
                </div>
            )}

        </main>
    )
}

export default Register