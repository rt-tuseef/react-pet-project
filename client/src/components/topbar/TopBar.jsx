import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i class="topIcons fa-brands fa-square-facebook"></i>
                <i class="topIcons fa-brands fa-square-twitter"></i>
                <i class="topIcons fa-brands fa-square-pinterest"></i>
                <i class="topIcons fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li class="topListItems"><Link class="link" to="/">Home</Link></li>
                    <li class="topListItems"><Link class="link" to="/about" >About</Link></li>
                    <li class="topListItems"><Link class="link" to="/contact">Contact</Link></li>
                    <li class="topListItems"><Link class="link" to="/write">Write</Link></li>
                    <li class="topListItems"><Link class="link" to="/">{user && "Logout"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img class="topImage" src="https://media.istockphoto.com/id/1158475162/photo/young-woman-blogger-in-spectacles-publishing-new-post-on-own-website-and-installing-new.webp?b=1&s=612x612&w=0&k=20&c=QQRcRs6Js57h7puRhGfC0cap9x1qc3Q8vStnapRqrm0=" alt=""></img>
                    ) : (
                            <ul className="topList">
                                <li class="topListItems"><Link class="link" to="/login">Login</Link></li>
                                <li class="topListItems"><Link class="link" to="/register" >Register</Link></li>
                            </ul>
                        )
                }
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
