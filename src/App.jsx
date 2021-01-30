import React, { Fragment, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CardProduct from "./components/card.product/Card.product";
import "./App.css";
import ProductPage from "./components/product.page/product.page";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";


//type FormElement = React.FormEvent<HTMLFormElement>;
/*
interface ITaks{
  name: string,
  done: boolean
}*/
/*
interface product{
  id: Number,
  nombre: string,
  precio: Number
}
*/
/*
declare namespace JSX {
  interface IntrinsicElements {
    producto: product;
  }
}
*/

//function App(): JSX.Element {
function App() {
  // Hooks
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Fuente Para Pc Gamer Aureox 600w Arxgp", precio: 6550, categoria: "fuente" },
    { id: 2, nombre: "Mouse Logitech G305", precio: 11940, categoria: "mouse" },
    { id: 3, nombre: "Teclado HyperX RGB", precio: 5120, categoria: "teclado" },
    { id: 4, nombre: "Gabinete Raidmax Neon 3 Fan RGB", precio: 12800, categoria: "gabinete" },
  ]);

  const [ carrito, agregarProducto ] = useState( [] );

  function reemplazarEspacios(nombre){
    return nombre.replace(/ /g,"_");
  }
  
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Route path="/productos/:producto">
          <ProductPage productosList={productos} agregarProducto={agregarProducto} carrito={carrito}/>
        </Route>

        <Route path="/">
          <div className="group-cards">
            <span style={{ fontSize: "1.8rem" }}>Otros Productos</span>
            <div className="container-group-cards">
              {productos.map((producto) => (
                //<Link to={`/productos/${reemplazarEspacios(producto.nombre)}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Link to={`/productos/${(reemplazarEspacios(producto.nombre).concat("_CD$"+producto.id))}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <CardProduct key={producto.id} producto={producto}/>
                </Link>
              ))}
            </div>
          </div>
        </Route>
        <Footer />
      </Router>
        
    </div>
  );
}

export default App;

/*
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITaks[]>([]);

  const handleSubmit = ( e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
    console.log(tasks);
  }

  const addTask = (name:string) => {
    //const newTasks:ITaks[] = [...tasks, {name, done: false}];
    tasks.push({name, done: false})
    setTasks(tasks);
  }
*/
/*
<Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange = { e => setNewTask(e.target.value) } value={newTask}/>
        <button>
          Save
        </button>
      </form>
</Fragment>
*/
