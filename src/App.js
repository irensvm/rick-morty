import { useState } from "react/cjs/react.development"
import Formulario from "./components/Formulario"
import PrintData from "./components/PrintData"

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState('')

 
  return (
    <div className="container">
      <h1>Rick&morty</h1>
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <PrintData nombrePersonaje={nombrePersonaje} />

    </div>
  )
}

export default App