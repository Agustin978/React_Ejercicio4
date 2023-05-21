import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arregloTareas}) => {
    //const listadoTareas =  arregloTareas.map((tarea, index)=>(<ListGroup.Item key={index}>{tarea}</ListGroup.Item>));
    //console.log(arregloTareas);
    arregloTareas.map((tarea, index) => console.log(tarea+' / '+index));
    return (
        /*
        <div>
            <ListGroup>
                {for(let i = 0; i < arregloTareas.length; i++){<ItemTarea muestraTarea={arregloTareas[i]}/>}}
            </ListGroup>
        </div>
        */
        
        <div>
            <ListGroup>
                {arregloTareas.map((tarea, index)=>(
                    <ItemTarea key={index} muestraTarea={tarea}></ItemTarea>
                ))}
            </ListGroup>
        </div>
    );
};

export default ListaTareas;