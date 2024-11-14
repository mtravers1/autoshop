
const Headnav = ()=>{
    return(
        <div>
            <div className="flex justify-between bg-slate-300 pt-3 pb-3">
                <div className="mx-3 flex">
                    <div className="px-3" >
                        <p className="">Toll-Free</p>
                    </div>
                    <div>
                        <p>Email</p>
                    </div>

                </div>
               
               <div className="">
               <div>
                    <p className="font-bold">Free Shipping</p>
                </div>

               </div>

              
              <div className="flex">
                    <div className="px-3">
                    <p>Theme FAQs</p>
                     </div>
                <div className="px-3">
                    <p>Need Help?</p>
                </div>
                <div className="px-3">
                    <select>
                        <option>
                            EN/USD
                        </option>
                    </select>
                </div>
              </div>
               

            </div>
            

        </div>
    )
}
export default Headnav