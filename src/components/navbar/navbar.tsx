// import { useState } from "react"
import Headnav from "./headnav"

const Navbar = ()=>{
    // const [toggleNav, setToggleNav] = useState(false)
    return(
        <div>
            <Headnav/>
            <div id="nav" className="sm:hidden">
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
        </div>
    )
}
export default Navbar