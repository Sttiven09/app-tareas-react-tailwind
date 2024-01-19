import CheckIcon from "../icons/CheckIcon"
import CrossIcon from "../icons/CrossIcon"

const TareaItem = ({tarea, eliminarTarea, actualizarTarea}) => { 

    const { id, completado, titulo } = tarea

    return (
        <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
                
                {/*<button className="rounded-full border-2 inline-block"></button>*/}

                <button className={`w-5 h-5 rounded-full ${
                    completado ? "grid  border- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex-none place-items-center"
                    : "border-2 inline-block"}`}
                    onClick={() => actualizarTarea(id) }
                    
                    >
                    
                
                {completado && <CheckIcon/>}
                </button>
                <p className={` text-gray-700 grow ${
                    completado && "line-through"}`}>{titulo}</p> 
                <button className="flex-none" onClick={() => eliminarTarea(id)}><CrossIcon/></button>
            </article>

    )
}
export default TareaItem