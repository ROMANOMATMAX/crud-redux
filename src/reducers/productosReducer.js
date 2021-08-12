//importamos los types de interes
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOS,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';
//cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case AGREGAR_PRODUCTO: 
            return {
                ...state,
                loading: true
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                 productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return state;
    }
}