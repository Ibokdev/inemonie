import style from "./header.module.css"
import logo from "../../assets/logo/Vector.svg"
function Header () {

    return (
       <div id={style.header} >
        <div className="">
            <img src={logo}/>
        </div>
        <ul>
            <li><a href="">Payment</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">Careers</a></li>
        </ul>
        <button><a href="">Get Started</a></button>
       </div>
    )
}

export default Header