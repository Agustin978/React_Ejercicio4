import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="email" placeholder="Ingrese una tarea" />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </div>
    );
};

export default Formulario;