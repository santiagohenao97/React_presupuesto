import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

export const Pregunta = ({setPresupuesto, setRestante, setPregunta}) => {
    //definir cantidad
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const definirPresupuesto = (e) =>{
        setCantidad(parseInt(e.target.value))
    }

    //submit
    const agregarPresupuesto = (e) =>{
        e.preventDefault()
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        }

        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setPregunta(false)
    }

    return (
        <>
        <h2>¿Cuál es tu presupuesto?</h2>

        {error ? <Error mensaje="Ingrese un valor válido"/>  : null} 
        <form onSubmit={agregarPresupuesto}>
            <input
                type="number"
                className="u-full-width"
                placeholder="Escribe tu presupuesto"
                onChange={definirPresupuesto}
            />
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto"
            />
        </form>
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}