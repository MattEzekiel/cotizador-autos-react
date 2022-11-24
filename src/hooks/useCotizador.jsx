import {useContext} from "react";
import CotizadorContext from "../context/CotizadorProvider.jsx";

const useCotizador = () => {
    return useContext(CotizadorContext);
}

export default useCotizador;