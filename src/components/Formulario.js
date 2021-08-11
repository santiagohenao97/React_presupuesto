import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error';
import shortid from 'shortid'

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault()
        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true)
            return
        }
        //construir el gasto
        const gasto = {
            nombre, 
            cantidad, 
            id : shortid.generate()
        }

        //pasar el gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)

        //resetear el form
        setNombre('')
        setCantidad(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gastos</h2>
            {error? <Error mensaje="todos los campos son obligatorios"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-fall-width"
                    placeholder="Ej. transporte" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)}  
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-fall-width"
                    placeholder="Ej. 300"  
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}   
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;