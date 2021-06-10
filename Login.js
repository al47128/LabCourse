import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login(){

    return(
        <div className="login">
            <Link>
            <img className="login__logo"
                src="https://startupyard.com/wp-content/uploads/2015/03/Gjirafa-Logo.png"
                alt=""/>
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="Password"/>
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>Duke hyre ne faqe ju pajtoheni me termat dhe kushtet e perdorimit</p>
            <button className="login__registerButton">Krijo llogarine tende</button>
            </div>


        </div>

    )

}
export default Login