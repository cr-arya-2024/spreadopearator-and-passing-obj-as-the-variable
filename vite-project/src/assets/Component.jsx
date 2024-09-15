import React,{useState} from 'react'
function Component(){

const [car,setCar]=useState({
    year:2024,
    model:"mahindra",name:"bujji"
})
function handleYear(e){
 setCar({...car,year:2025})    
}
function handleModel(e){
    setCar({...car,model:e.target.value})    
}
function handleName(e){
    setCar({...car,name:e.target.value})    
}
    return(
        <>
        <p>car:{car.year} {car.model} {car.name}</p>
       <input type="number" value={car.year} onChange={handleYear}/> <br></br>
       <input type="text" value={car.model} onChange={handleModel}/> <br></br>
       <input type="text" value={car.name} onChange={handleName}/> 
        </>
    )
}
export default Component