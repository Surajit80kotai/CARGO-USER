import React from 'react'
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="content">
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1>Thank you !</h1>
                        <p>Thanks for subscribing to our news letter. </p>
                        <p>you should receive a confirmation email soon </p>
                        <button onClick={() => navigate('/')} className="go-home">
                            go home
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuccessPage