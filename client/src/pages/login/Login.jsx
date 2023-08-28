import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email" name="email"></input>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password" name="password"></input>
                <button class="loginButton" type="submit">Login</button>
            </form>
            <button className="loginRegisterButton"><Link class="link" to="/register">Register</Link></button>
        </div>
    )
}
