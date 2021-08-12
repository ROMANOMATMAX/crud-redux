import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOS,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

/*************** Crear nuevos productos ***************/
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())
        try{//Recuerda que aqui esto deberia ejecutar una accion async en db que puede dar error
           await clienteAxios.post('/productos', producto);
            //Si todo sale bien actualizamos el state
            dispatch( agregarProductoExito(producto))
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        }catch(error){
            console.log(error);
            //Si hay un error cambiar el error del state a true
            dispatch( agregarProductoError(true))

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})

//Si el producto se guarda en la db
const agregarProductoExito = producto => (
    {
        type: AGREGAR_PRODUCTO_EXITO,
        payload: producto
    }
)
//Si hubo un error 
const agregarProductoError = estadoError => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estadoError
})

/*************** Descarga productos de DB***************/
export function obtenerProductosAction (){
    return async (dispatch) => {
        dispatch(descargarProductos())
    }
}


const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})