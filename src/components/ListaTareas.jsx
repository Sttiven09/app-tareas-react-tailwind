import TareaItem from "./TareaItem"

const ListaTareas = ({tareas}) => { 
    return (
        <div className="bg-white rounded-md mt-8"> 
            {tareas.map((tarea) => ( <TareaItem key={tarea.id} tarea={tarea}/>)
            )}
        </div>
    )
}
export default ListaTareas