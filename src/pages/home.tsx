
import '../App.css'
import CarSelect from '../components/navbar/carSelect'
import Navbar from '../components/navbar/navbar'
import data from '../data/vehicles.json'
import headlights from '../photos/headlights.png'
import bg from '../photos/bg1.png'
import Footer from '../components/navbar/footer'
// interface vehicles{
//   make:String;
//   model:String;
//   year:Number
// }
function Home() {


  // const handleSubmit=(e)=>{
  //   e.preventDefault()
    
  // }
  // Create a Set to store unique IDs
  const uniqueData = data.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.make_id === value.make_id // Ensure 'id' is unique
    ))
  );
  
  // Now, map out the unique data
  const mappedData = uniqueData.map(item => item.make_name);
  console.log(uniqueData)
  console.log(mappedData);  // Output: ["Toyota", "Honda", "Ford"]
  
  // Log the Set

  return (
    <div>
      <div>
        <Navbar/>

        <div id='navbottom' className="flex justify-between items-center">
                    <div className="flex flex-col mx-4">
                        <span > 
                            <button className="p-6 bg-red-400 m-2">Shop All Categories</button>
                        <button className="mx-4">Home</button>
                        </span>
                       
                    </div>
                    <div className="flex">
                        <p className="mx-4">Available 24/7 091 234-ELLA</p>
                        <select >
                            <option>
                                EN/USD
                            </option>
                        </select>
                    </div>
                </div>
   



  <CarSelect/>
        
        
         
        
        
      </div>
      <div className='flex flex-col sm:flex-row items-center' id='middlesection' >
        
      

        <div className='w-1/2 flex flex-col justify-center items-center'>
        <h2 className='text-3xl py-6 md:text-start text-center'>Save 10% new and used headlights</h2>
        <button className='text-xl border border-black rounded-2xl bg-red-400 p-4'>Show Now</button>
          
        </div>

        <div  className='w-1/2 flex justify-center items-center bg-green py-4'>
        <img src={headlights}/>
        </div>
        


      </div>
      <div>
        <span>
        </span>
      </div>
      <div>
          <h2 className=' text-center text-4xl font-bold my-5'>Featured Items</h2>
        <div id='scroll' className='flex overflow-auto'>
        <img className='mx-6' src={headlights}/>
        <img height={40} width={200} className='mx-6' src={bg}/>
        <img className='mx-6' src={headlights}/>
        <img height={40} width={200} className='mx-6' src={bg}/>
        <img className='mx-6' src={headlights}/>
        <img height={40} width={290} className='mx-6' src={bg}/>
        </div>

    

      </div>
      <Footer/>
     
    </div>
  )
}

export default Home
