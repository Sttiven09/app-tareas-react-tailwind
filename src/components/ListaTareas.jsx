import TareaItem from "./TareaItem"

const ListaTareas = ({tareas, eliminarTarea, actualizarTarea}) => { 
    return (
        <div className="bg-white rounded-md mt-8"> 
            {tareas.map((tarea) => ( <TareaItem key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea}/>)
            )}
        </div>
    )
}
export default ListaTareas