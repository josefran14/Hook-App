import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id: 123,
//   name: 'Jose Saavedra',
//   email: 'jose@gmail.com'
// }

export const UserProvider = ({children}) => {

   const [user, setUser] = useState()

   const [parrafo, setParrafo] = useState()

  return (
    // <UserContext.Provider value={{hola: "Mundo", user}}>
    <UserContext.Provider value={{user, setUser, parrafo, setParrafo}}>
       {children}
    </UserContext.Provider>
  )
}
