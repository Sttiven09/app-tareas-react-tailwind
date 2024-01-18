import { useState } from "react"
import CrearTarea from "./components/CrearTarea"
import FiltarTareas from "./components/FiltrarTareas"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"
import TareasComputadas from "./components/TareasComputadas"

const estadoInicialTareas = [
  {
    id:1,
    titulo: "Estudiar react",
    completado :false,

  },
  {
    id:2,
    titulo: "Estudiar Vue.js",
    completado :false,

  },
  {
    id:3,
    titulo: "Estudiar Laravel",
    completado :false,

  },
  {
    id:4,
    titulo: "Estudiar Tailwind css",
    completado :false,

  }
  
]

const App = () => {

  const [tareas, setTareas] = useState(estadoInicialTareas)

  return (<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
    {/*Header*/}
    <Header/>
    <main className="container mx-auto px-4 mt-8">
      {/*Crear Tareas*/}
      <CrearTarea/>
      {/*TareaList Lista de todas las tareas ItemTarea -> articulos*/}
      <ListaTareas tareas={tareas}/>
      {/*Tareas computadas - contar cantidad de tareas*/}
      <TareasComputadas/>
      {/*TareaFiltrar -> FiltrarTareas */}
      <FiltarTareas/>
    </main>

      <Footer/>
  </div>)
}
export default App