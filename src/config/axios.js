//Un clienta axios se crea para no estar repitiendo la url por todos lados
import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000/'
})

export default clienteAxios;