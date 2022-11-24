import React, {useCallback, useEffect, useMemo, useState} from 'react';
import useCotizador from "../hooks/useCotizador.jsx";
import {MARCAS, PLANES} from "../constants/index.js";

function Resultado() {
    const { resultado, datos } = useCotizador();
    const { marca, plan, year } = datos;
    const [yearResult, setYearResult] = useState(year)

    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.id === Number(marca) ),
        [resultado]
    );
    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan) ),
        [resultado]
    );

    useEffect(() => {
        setYearResult(year)
    }, [resultado]);

    return (
        <div className={"bg-gray-100 text-center mt-5 p-5 shadow"}>
            <h2 className={"text-gray-600 font-black text-3xl"}>
                Resumen
            </h2>
            <dl className={"my-2 flex gap-2 justify-center items-center"}>
                <dt className={"font-bold"}>Marca:</dt>
                <dd>{nombreMarca.nombre}</dd>
            </dl>
            <dl className={"my-2 flex gap-2 justify-center items-center"}>
                <dt className={"font-bold"}>Plan:</dt>
                <dd>{nombrePlan.nombre}</dd>
            </dl>
            <dl className={"my-2 flex gap-2 justify-center items-center"}>
                <dt className={"font-bold"}>Año del Auto:</dt>
                <dd>{yearResult}</dd>
            </dl>
            <dl className={"my-2 flex gap-2 justify-center items-center text-2xl"}>
                <dt className={"font-bold"}>Resultado:</dt>
                <dd>{resultado}</dd>
            </dl>
        </div>
    );
}

export default Resultado;