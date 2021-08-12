import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {obtenerProductosAction} from '../actions/productosActions'
const Producto = () => {
    //Utilizamos el dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        //Consultar la API
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos();
    }, [])


    return (  
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            <table className="table table-striped">
                 <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                 </thead>
                 <tbody>
                     
                 </tbody>
            </table>
        </Fragment>
    );
}
 
export default Producto;