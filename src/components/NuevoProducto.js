import React, {useState} from 'react';
//1)Importo el useDispatch y el useSelector from react-reduc
import {useDispatch, useSelector} from 'react-redux'
//2)Importo las funciones que me interesan de algun action en  particular
import { crearNuevoProductoAction } from '../actions/productosActions'

const NuevoProducto = ({history}) => {
    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);
    //Uso el dispatch
    const dispatch = useDispatch();
    //Acceder al state del store
    const cargando = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)
    console.log(cargando);

    //mandar a llamar la funcion crearNuevoProductoAction de productosActions.js
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

    const submitNuevoProducto = e => {
        e.preventDefault();
        //Validar formulario
        if(nombre.trim() === '' || precio <=0){
            return 
        }
        //validar errores

        //Crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        history.push('/')
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form action=""
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="nombre producto"
                                    name="nombre" 
                                    id="nombre" 
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="precio producto"
                                    name="precio" 
                                    id="precio" 
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;