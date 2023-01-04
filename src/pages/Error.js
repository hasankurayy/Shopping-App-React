import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main>
            <div className="pg-header">
                <div className="container">
                    <h1>404 Error</h1>
                </div>
            </div>
            <div className="container content">
                <p>Page not found...</p>
                <Link to="/" className="btn btn-primary btn-sm">Go Back Homepage</Link>
            </div>
        </main>
    )
}

export default Error