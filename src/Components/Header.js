import "./Styles/Header.css"
import logo from "./Assets/logo.png"
export default function Header() {
    return(
        <div id = "header">
            <div id = "icon-holder">
                <img id = "icon" src = {logo} alt="Logo"/>
            </div>
            <div id="app-name">
                <p>Research Bot</p>
            </div>
        </div>
    )
}