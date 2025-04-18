import React,{useState} from 'react'

const Multiple_Input_Handling = () => {
    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:"",
        age:"",
        phone:"",
    });

    const  onChangeHandler = (e) =>{
       const  {name,value} = e.target;

       setformData({...formData,[name]:value});
    }; 

    const submitHandler = (e) =>{
        e.preventDefault();
        alert("your form has been submitted");

        console.log(formData);
        setformData({
            name:"",
            email:"",
            password:"",
            age:"",
            phone:"",
        });
    };


  return (
    <>
      <form onSubmit={submitHandler}>
         <div>
            Name:-{" "}
             <input
               value={formData.name}
               name="name"
               onChange={onChangeHandler}
               placeholder='name'
             type="text" />
         </div>
         <div>
            Email:-{" "}
             <input 
               value={formData.email}
               email="email"
               onChange={onChangeHandler}
               placeholder='email'
             type="email" />
         </div>
         <div>
            Password:-{" "}
             <input 
              value={formData.password}
              password="password"
              onChange={onChangeHandler}
              placeholder='password'
             type="password"/>
         </div>
         <div>
            Age:-{" "}
             <input 
               value={formData.age}
               age="age"
               onChange={onChangeHandler}
               placeholder='00'
             type="number" />
         </div>
         <div>
            Phone:-{" "}
            <input 
            value={formData.phone}
            phone="phone"
            onChange={onChangeHandler}
            placeholder='0000000000'
            type="number" />
         </div>
         <div>
            <button>Submit</button>
         </div>
      </form>
    </>
  )
}

export default Multiple_Input_Handling
