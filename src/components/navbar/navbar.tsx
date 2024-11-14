import Headnav from "./headnav"

const Navbar = ()=>{
    return(
        <div>
            <Headnav/>
            <div id="nav" className="">
                <div id='navtop' className="flex justify-around items-center">
                    <div  id='topleft' className="flex m-3 items-center">
                        <p className="font-bold text-xl">THECARKEYREPLACEMENTCENTER</p>
                        <span>
                            <input className="border rounded w-80 h-10"/>
                            <button className="bg-red-400 rounded h-10 w-24">search</button>
                        </span>
                    </div>
                    <div id='topright' className="m-9 flex items-center">
                        <span className="m-5">
                            <p className="">
                                Hello
                            </p>
                            <p>Sign in</p>
                            
                           
                        </span>
                        <span className="m-4">
                            <p>Wish Lists</p>
                            <p></p>
                            
                        </span>
                        <span className="m-5">
                            Cart
                        </span>

                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar