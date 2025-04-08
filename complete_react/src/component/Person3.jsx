import React from 'react'

const Person3 = ({name,age,panCard,price}) => {
  return (
    <div>
        <h1>Name = {name}</h1>
        <h3>{age>18 ? <h1>You Can Drive</h1> : <h1>You can not drive</h1>}</h3>
        <h1>{panCard ?<h3>You Can open your account</h3>:" "}</h1>
        <h2>{panCard && <p>you can open account</p>}</h2>
        <div>{(price == 100) && <h1>You can purchase iphone</h1>}</div>
    </div>
  )
}

export default Person3

//  Ternary operator with && operator with props
