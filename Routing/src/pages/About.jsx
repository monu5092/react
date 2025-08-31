import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const  navigate = useNavigate()

  const goToHome = ()=>{
    navigate("/");
  }
  const goback = () =>{
    navigate(-1)
  }
  return (
    <div>
       <button onClick={goToHome }>Go To Home</button>
       <button onClick={goback}>Go To Back</button>
    </div>
  )
}

export default About
