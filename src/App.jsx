import CrossIcon from "./icons/CrossIcon"
import LunaIcon from "./icons/LunaIcon"
const App = () => {
  return (<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
    <header className="container mx-auto px-4 pt-8 ">
      <div className="flex justify-between">
      <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">Tareas</h1>
      <button><LunaIcon className="fill-red-400" /></button>
      </div>
      <form className="flex items-center gap-4 px-4 bg-white rounded overflow-hidden py-4 mt-8">
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
        <input className="w-full text-gray-500 outline-none" type="text" placeholder="Ingrese la tarea" />
      </form>
    </header>
    <main className="container mx-auto px-4 mt-8">
      <div className="bg-white rounded-md"> 
      <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-700 grow">Complete la tarea 1</p> 
        <button className="flex-none"><CrossIcon/></button>
      </article>
      <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-700 grow">Complete la tarea 2</p> 
        <button className="flex-none"><CrossIcon/></button>
      </article>
      <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-700 grow">Complete la tarea 3</p> 
        <button className="flex-none"><CrossIcon/></button>
      </article>
      
      <section className="py-4 px-4 flex justify-between">
        <span className="text-gray-400"> 5 tareas antes</span>
        <button className="text-gray-400">Completar tareas</button>
      </section>
      </div>

    </main>

    <section className="container mx-auto px-4 mt-8">
      <div className="py-4 px-4 rounded-md flex justify-center bg-white gap-4">
      <button className="hover:text-blue-600">Todos</button>
      <button className="hover:text-blue-600">Activar</button>
      <button className="hover:text-blue-600">Completar</button>
      </div>
    </section>  
    <section className="text-center mt-8">
      Drag and drop
    </section>
  </div>)
}
export default App