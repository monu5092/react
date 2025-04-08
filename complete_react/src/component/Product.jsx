import React from 'react'

const Product = ({title,brand,price,rom,ram,camera,fingerPrint}) => {
  return (
    <div>
        <h1>Mobile Name = {title}</h1>
        <h3>Mobile Brand = {brand} </h3>
        <h4>Mobile price ={price}</h4>
        <h3>ROM ={rom}</h3>
        <h3>RAM={ram}</h3>
        <h3>Camera ={camera}</h3>
        <h3>Finger Print={fingerPrint}</h3>
    </div>
  )
}

export default Product

// Reusable Component and Props