import CrearTarea from "./components/CrearTarea"
import FiltarTareas from "./components/FiltrarTareas"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"
import TareasComputadas from "./components/TareasComputadas"
import CrossIcon from "./icons/CrossIcon"
import LunaIcon from "./icons/LunaIcon"
const App = () => {
  return (<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
    {/*Header*/}
    <Header/>
    <main className="container mx-auto px-4 mt-8">
      {/*Crear Tareas*/}
      <CrearTarea/>
      {/*TareaList Lista de todas las tareas ItemTarea -> articulos*/}
      <ListaTareas/>
      {/*Tareas computadas - contar cantidad de tareas*/}
      <TareasComputadas/>
      {/*TareaFiltrar -> FiltrarTareas */}
      <FiltarTareas/>
    </main>

      <Footer/>
  </div>)
}
export default App