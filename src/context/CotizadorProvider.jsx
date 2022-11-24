import {createContext, useState} from "react";
import {calcularMarca, calcularPlan, diferenciaYear, formatearDinero} from "../helpers/index.js";

const CotizadorContext = createContext(undefined);

const CotizadorProvider = ({children}) => {
    const [datos, setDatos] = useState({
       marca: '',
       year: '',
       plan: ''
    });
    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        // Una Base
        let resultado = 2000;

        // Obtener Diferencia de años
        const diferencia = diferenciaYear(datos.year);

        // Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100;

        // Americano 15%
        // Europeo 30%
        // Asiático 5%
        resultado *= calcularMarca(datos.marca);

        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan);

        // Formatear Dinero
        resultado = formatearDinero(resultado);

        setResultado(resultado);
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;