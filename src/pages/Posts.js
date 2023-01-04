import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Posts() {

    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))
            .then(setLoader(false))
    }, [])

    return (
        <main className='posts'>
            <div className="pg-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1>Posts</h1>
                        </div>
                        <div className="col-lg-5">
                            <nav>
                                <ol className='breadcrumb justify-content-end'>
                                    <li className="breadcrumb-item">
                                        <Link to="home">Home</Link>
                                    </li>
                                    <li className='breadcrumb-item active'>
                                        Posts
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content">
                {loader
                    ? <div className='text-center'>Loading...</div>
                    : (
                        <div className="row">
                            {posts.map(post => (
                                <div className="col-sm-6" key={post.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) }
            </div>
        </main>
    )
}

export default Posts