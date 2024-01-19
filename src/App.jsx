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
    completado :true,

  },
  {
    id:3,
    titulo: "Estudiar Laravel",
    completado :false,

  },
  {
    id:4,
    titulo: "Estudiar Tailwind css",
    completado :true,

  }
  
]

const App = () => {
  
    const [tareas, setTareas] = useState(estadoInicialTareas)

    const crearTarea = (titulo) =>{
      const nuevaTarea ={
        id: Date.now(),
        titulo:titulo.trim(),
        completado: false,
      }
      setTareas([...tareas,nuevaTarea])
    }

  return (<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
    {/*Header*/}
    <Header/>
    <main className="container mx-auto px-4 mt-8">
      {/*Crear Tareas*/}
      <CrearTarea crearTarea={crearTarea}/>
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