import CrossIcon from "../icons/CrossIcon"

const ListaTareas = () => { 
    return (
        <div className="bg-white rounded-md mt-8"> 
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
        </div>
    )
}
export default ListaTareas