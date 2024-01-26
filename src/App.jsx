import { useEffect, useState } from "react"
import CrearTarea from "./components/CrearTarea"
import FiltarTareas from "./components/FiltrarTareas"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"
import TareasComputadas from "./components/TareasComputadas"

const estadoInicialTareas = JSON.parse(localStorage.getItem("tareas")|| [] )

const App = () => {
  
    const [tareas, setTareas] = useState(estadoInicialTareas)

    useEffect(() => {
      localStorage.setItem("tareas",JSON.stringify(tareas))
    }, [tareas])
    

    const crearTarea = (titulo) =>{
      const nuevaTarea ={
        id: Date.now(),
        titulo:titulo.trim(),
        completado: false,
      }
      setTareas([...tareas,nuevaTarea])
    }
    const actualizarTarea = ( id) => {
      setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, completado: !tarea.completado}:tarea))
    }

    const eliminarTarea = (id) => {
      setTareas(tareas.filter((tarea) => tarea.id !== id))
    }
    const tareasNoCompletadas = tareas.filter((tarea) => !tarea.completado).length
    
    const eliminarTareasCompletadas = () => {
      setTareas(tareas.filter((tarea) => !tarea.completado))
    }
    const [filtar, setfiltar] = useState("todas")

    const cambiarFiltro = (filtrar) => setfiltar(filtrar)
    
    const filtrarTareas = () =>{
    switch(filtar){
      case "todas":
        return tareas
      case "sinCompletar":
        return tareas.filter((tarea) => !tarea.completado)
      case "completada":
        return tareas.filter((tarea) => tarea.completado)
    }
  }

  return (<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300 dark:bg-gray-900 dark:text-gray-200 transition-all duration-1000">
    {/*Header*/}
    <Header/>
    <main className="container mx-auto px-4 mt-8">
      {/*Crear Tareas*/}
      <CrearTarea crearTarea={crearTarea}/>
      {/*TareaList Lista de todas las tareas ItemTarea -> articulos*/}
      <ListaTareas tareas={filtrarTareas()} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea}/>
      {/*Tareas computadas - contar cantidad de tareas*/}
      <TareasComputadas tareasNoCompletadas={tareasNoCompletadas} eliminarTareasCompletadas={eliminarTareasCompletadas}/>
      {/*TareaFiltrar -> FiltrarTareas */}
      <FiltarTareas cambiarFiltro={cambiarFiltro} filtar={filtar}/>
    </main>

      <Footer/>
  </div>)
}
export default App