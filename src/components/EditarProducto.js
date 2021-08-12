import React from 'react';

const EditarProducto = () => {
    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="nombre producto"
                                    name="nombre" 
                                    id="nombre" 
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
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditarProducto;