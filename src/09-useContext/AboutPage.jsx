import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = () => {

   const {parrafo, setParrafo} = useContext(UserContext)

  return (
    <>
       <h1>AboutPage</h1>
       <hr />
       
       <p>{parrafo}</p>

       <button className="btn"
        style={{background: "green"}}
        onClick={() => setParrafo("Profundizando sobre el hook useContext")}
        >
        Mostrar Parrafo
       </button>

       <button className="btn btn-primary"
        onClick={() => setParrafo("")}
        >
        Ocultar Parrafo
       </button>
    </>
  )
}
