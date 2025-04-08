import React from 'react'
import './laptop.css'

const Laptop = ({brandName,model,price}) => {
    /* <--------Internal CSS------>*/
    // const munnaBhaiya = {
    //     backgroundColor: "blue",
    //     padding: "15px",
    //     margin: "15px",
    //     borderRadius: "10px",
    //     border: "10px solid red",
    //   };
  return (

    <div 
            // // Inlinne Styling
            // style={{backgroundColor:'grey',
            //  padding:"10%",
            //  margin :"20px",
            //  borderRadius:"10px",
            //  border:"2px solid yellow"}}
            //style={munnaBhaiya}
          className='div'
          // in class is keyWord so we use classname     
    >
        <h3>BrandName ={brandName}</h3>
        <h3>Model ={model}</h3>
        <h3>Price ={price}</h3>
    </div>
  )
}

export default Laptop
