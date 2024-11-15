


import { useState } from 'react';
import './carSelect.css'
import carDataJson from '../../data/vehicles.json'
interface CarModel {
    model_id: number;
    model_name: string;
    vehicle_type: string;
    years: number[];
    model_styles?: any;  // You can define this more specifically if needed
  }
  
  // Define the type for a car make
  interface CarMake {
    make_id: number;
    make_name: string;
    make_slug: string;
    models: { [key: string]: CarModel }  // models is an object with model names as keys
  }

const CarSelect = () => {
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const carData = carDataJson as unknown as CarMake[]; // Type assertion


  // Find the make selected
  const selectedCarMake = selectedMake ? carData.find(make => make.make_name === selectedMake) : null;
  
  // Get models for the selected make
  const models = selectedCarMake ? selectedCarMake.models : {};

  // Get years for the selected model
  const years = selectedModel && models[selectedModel] ? models[selectedModel].years : [];

  const handleSubmit = (e:any)=>{
    e.preventDefault()
    console.log(
      'Make:'+selectedMake, 'Model:'+selectedModel, 'Years:'+selectedYear
    )
    alert(selectedMake+ selectedModel + selectedYear)
  }



  return (
    <div>
        <div  style={{backgroundImage:'url(https://thecarkeyreplacementcenter.myshopify.com/cdn/shop/files/image-1880x360.png?v=1728168454&width=1880)'}} className='bg flex items-center justify-center h-64'>
        <form id="carSelectform" onSubmit={handleSubmit} className='flex'>
        <h1 className='text-white text-center text-2xl'>Vehicle Search</h1>

      <select className="h-10" value={selectedMake} onChange={(e) => { setSelectedMake(e.target.value); setSelectedModel(""); setSelectedYear(""); }}>
        <option value="">Select Make</option>
        {carData.map((make) => (
          <option key={make.make_id} value={make.make_name}>{make.make_name}</option>
        ))}
      </select>

      <select className="h-10" value={selectedModel} onChange={(e) => { setSelectedModel(e.target.value); setSelectedYear(""); }} disabled={!selectedMake}>
        <option value="">Select Model</option>
        {Object.keys(models).map((modelName) => (
          <option key={modelName} value={modelName}>{modelName}</option>
        ))}
      </select>

      <select className="h-10" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} disabled={!selectedModel}>
        <option value="">Select Year</option>
        {years.map((year:any) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <button className='border bg-gray-50'>Search</button>
    
    </form>
    </div>
    </div>
   
  );
};
  
  export default CarSelect;