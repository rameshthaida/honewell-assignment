import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const[citiList,setCitiList]=useState([]);

  useEffect(() => {
    getCitiList();
  },[]);


  const getCitiList=()=>{
    axios
    .get("/getCitiList")
    .then((response)=>setCitiList(response.data));
   

    console.log("Citilist"+citiList.length);
}

  return (
    
    <div className="App">
      <div style={{height:"20%",width:"30%"}} >
   
       
     <table style={{height:"70px",width:"100%",boarder:'3px solid black',position:"sticky", borderCollapse:"collapse"}}>
     <div>       
       <thead style={{position:"sticky"}}>   
      
        <tr>
           <th>City Name</th> 
          <th>City State</th>
          <th>Lattitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody  style={{overflow:"scroll"}}>
     { 
    
    Object.keys(citiList).length>0 &&  
    citiList.map((row,index)=>{
      return(

      <tr>
        <td>{row.name}</td>
        <td>{row.state}</td>
        <td>{row.lat}</td>
        <td>{row.lon}</td>
      </tr>
      
    )})
  
    }
    </tbody>
    </div>
    
</table>



<div></div>
</div>


         </div>
  );
}

export default App;
