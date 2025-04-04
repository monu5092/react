import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App </h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit google</a>
// )

// eslint-disable-next-line no-undef
// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target: "_blank"},
//   'click me to visit Google'
// )

createRoot(document.getElementById('root')).
render(

    // <MyApp />
    // MyApp()
    //anotherElement
   // reactElement
   <App/>
  
)
