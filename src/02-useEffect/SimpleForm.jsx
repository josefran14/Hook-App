import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
     username: 'josefran',
     email: 'francisco@gmail.com'
   })

   const {username, email} = formState

   const onInputChange = ({target}) =>{
    const {name,value} = target
    setFormState({
        ...formState,
        [name] : value
    })
   }


   useEffect(() =>{
    //console.log('useEffect Called')
   }, [])

   useEffect(() =>{
    //console.log('FormState Change')
   }, [formState])

   useEffect(() =>{
    //console.log('Email Change')
   }, [email])

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input type="text"
       className="form-control"
        placeholder="Username" 
        name="username"
        value={username}
        onChange={onInputChange}
        />

      <input type="email" 
      className="form-control mt-2" 
      placeholder="francisco@gmail.com" 
      name="email"
      value={email}
      onChange={onInputChange} 
      />

      {
        (username === 'josefran21') && <Message/>
      }

    </>
  )
}
