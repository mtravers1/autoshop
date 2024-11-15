import { useState } from "react"
import Headnav from "./headnav"
import logo from '../../photos/logo.png'
import './navbar.css'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ()=>{
    const [toggleNav, setToggleNav] = useState(false)
    const Toggle = ()=>{
        setToggleNav(!toggleNav)
    }
    return(
        <div>
            <Headnav/>
            <div id="navi" className="flex justify-around items-center">
                <img height={100} width={100} src={logo}/>


                <div >
                    <ul id='menu' className="flex">
                        <li className="m-3">
                            <a>Home</a>
                        </li>
                        <li  className="m-3">
                            <a>Products</a>
                        </li>
                        <li  className="m-3">
                            <a>About</a> 
                        </li>
                        
                    </ul>
                </div>


                <div>
                <FaShoppingCart size={30}/>

                </div>
                {/* <div id='navtop' className="flex justify-around items-center">
                    <div  id='topleft' className="flex m-3 items-center">
                        <p className="font-bold text-xl">THECARKEYREPLACEMENTCENTER</p>
                       
                    </div>
                    <div>
                            <input className="border rounded w-80 h-10"/>
                            <button className="bg-red-400 rounded h-10 w-24">search</button>
                        </div>
                    <div id='topright' className="m-9 flex items-center">
                        <div className="m-5">
                            <p className="">
                                Hello
                            </p>
                            <p>Sign in</p>
                            
                           
                        </div>
                        <div className="m-4">
                            <p>Wish Lists</p>
                            <p></p>
                            
                        </div>
                        <div className="m-5">
                            Cart
                        </div>

                    </div>
                </div> */}
           
            </div>
            <div id="mobilenav" className="flex flex-row items-center justify-between ">
                <img height={100} width={100} src={logo}/>
                <div className="">
            <button className="text-4xl" onClick={()=>Toggle()}>menu</button>
            
            
            </div>
            <FaShoppingCart size={50}/>

</div>
{toggleNav && (
                <div className="flex justify-center items-center" >
                    <ul id='menu' className="flex flex-col">
                        <li className="m-3">
                            <a>Home</a>
                        </li>
                        <li  className="m-3">
                            <a>Products</a>
                        </li>
                        <li  className="m-3">
                            <a>About</a> 
                        </li>
                        
                    </ul>


               
                

                </div>
            )}
        </div>
    )
}
export default Navbar