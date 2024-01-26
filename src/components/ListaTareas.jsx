import TareaItem from "./TareaItem"

const ListaTareas = ({tareas, eliminarTarea, actualizarTarea}) => { 
    return (
        <div className="rounded-t-md overflow-hidden bg-white rounded-md mt-8 dark:bg-gray-800 transition-all duration-1000"> 
            {tareas.map((tarea) => ( <TareaItem key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea}/>)
            )}
        </div>
    )
}
export default ListaTareas