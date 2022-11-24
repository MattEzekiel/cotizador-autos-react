import Formulario from "./Formulario.jsx";
import useCotizador from "../hooks/useCotizador.jsx";
import Resultado from "./Resultado.jsx";

function AppSeguro() {
    const { resultado } = useCotizador();

    return (
       <>
           <header className={"my-10"}>
               <h1 className={"text-white text-center text-4xl font-black"}>Cotizador de Seguros de Autos</h1>
           </header>
           <main className={"bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10"}>
               <Formulario />
               { resultado !== 0 && (
                   <Resultado />
               ) }
           </main>
       </>
    );
}

export default AppSeguro;