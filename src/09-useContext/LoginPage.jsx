import {useContext} from "react"
import {UserContext} from "./context/UserContext"

export const LoginPage = () => {
     
    const {user, setUser} = useContext(UserContext)

    return (
      <>
         <h1>LoginPage</h1>
         <hr />

      <pre>{JSON.stringify(user)}</pre>

      <button className="btn btn-primary" onClick={() => setUser({
        id: 123,
        name: "Jose Saavedra",
        email: "jose@gmail.com",
        age: 18
      })}>
        Establecer Usuario
      </button>

      <button className="btn btn-primary" onClick={() => setUser()}>
        Ocultar Usuario
      </button>

      </>
    )
  }