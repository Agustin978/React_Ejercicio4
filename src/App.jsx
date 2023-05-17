import {Container} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <Container className='my-5 mainPage'>
      <h1 className='display-4 text-center'>Listado de Tareas</h1>
      <hr />
    </Container>
    {/*aqui se agrega el componenete*/}
    <footer className='bg-dark text-center text-secondary py-4'>
      <p className='display-6'>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
