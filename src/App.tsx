import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/navbar'
import data from './data/vehicles.json'
// interface vehicles{
//   make:String;
//   model:String;
//   year:Number
// }
function App() {


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
  const category =['Make', 'Model', 'Year']

  return (
    <>
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
        <div className='flex items-center justify-center h-64'>
          <form >
          <select>
      {data.map((i)=>(
        <>
        <option>{i.make_name}</option>
        
        </>
      ))}



    </select>  
        
          <button>Search</button><button>refresh</button>
          </form>
        </div>
        
        
      </div>
     
    </>
  )
}

export default App
