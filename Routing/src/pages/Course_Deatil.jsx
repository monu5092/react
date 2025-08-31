import React from 'react'
import { useParams,Link, useLocation } from 'react-router-dom'

const Course_Deatil = () => {
    //console.log(useParams);
    const arr = [
        {id:'MERN001',course_name:'Mern Stack',price:10000,duration:'5 Month'},
        {id:'Java002',course_name:'Java Full_Stack',price:15000,duration:'9 Month'},
        {id:'Pyhton003',course_name:'Python Full_Stack',price:5000,duration:'6 Month'},
        {id:'React004',course_name:'React.js',price:3000,duration:'2 Month'}
      ]
    const {id} = useParams()
    const course_detail = arr.filter((data)=>data.id == id)
    console.log(course_detail)
  return (
    <>
    <div>
      <h1>Course Id = {id}</h1>
      <h2>Course Name = {course_detail[0].course_name}</h2>
      <h2>Course Duration ={course_detail[0].duration}</h2>
      <h2>Course Price ={course_detail[0].price}</h2>
    </div>
    <button>
        <Link to='/courses'  style={{textDecoration:"none",color:"black"}}>All Courses</Link>
    </button>
    </>
  )
}

export default Course_Deatil
