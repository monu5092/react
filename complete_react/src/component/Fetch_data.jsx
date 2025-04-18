import React, { useEffect, useState } from 'react'

const Fetch_data = () => {

    const[apiData,setApiData] = useState([]);
    
  useEffect(()=>{
      const fetchDataFromAPI = async ()=>{
        const api = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await api.json();
        setApiData(data);
        console.log("my data = ",data);
      };

      fetchDataFromAPI();
  },[]);

  return (
    <div>
    {apiData.map((data) => (
        <div
        key={data.id}
          style={{
            color:"white",
            backgroundColor: "blue",
            margin: "10px",
            border: "5px solid red",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>{data.title}</h3>
        </div>
      ))}  
    </div>
  )
}

export default Fetch_data;
