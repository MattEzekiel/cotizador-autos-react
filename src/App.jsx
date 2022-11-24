import './App.css'
import AppSeguro from "./components/AppSeguro.jsx";
import { CotizadorProvider } from "./context/CotizadorProvider.jsx";

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
