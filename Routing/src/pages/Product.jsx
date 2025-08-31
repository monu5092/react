import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

  const arr = [
    {id:'MERN001',course_name:'Mern Stack',price:10000,duration:'5 Month'},
    {id:'Java002',course_name:'Java Full_Stack',price:15000,duration:'9 Month'},
    {id:'Pyhton003',course_name:'Python Full_Stack',price:5000,duration:'6 Month'},
    {id:'React004',course_name:'React.js',price:3000,duration:'2 Month'}
  ]

  return (
    <div>
      <ul>
        {arr.map((data)=> <div key={data.id}>
          <li>
            <Link to={`/courses/${data.id}`}>{data.course_name}</Link>{" "}
            </li>
        </div>)}
      </ul>
    </div>
  )
}

export default Product
