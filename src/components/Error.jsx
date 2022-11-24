import React from 'react';
import useCotizador from "../hooks/useCotizador.jsx";

function Error() {
    const { error } = useCotizador();
    return (
        <p
            aria-describedby={"error"}
            className={"border text-center border-red-400 bg-red-100 py-3 text-red-700"}
        >{error}</p>
    );
}

export default Error;