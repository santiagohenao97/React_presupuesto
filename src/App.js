import React, { useState, useEffect } from "react";
import { Pregunta } from "./components/Pregunta";
import Formulario from "./components/Formulario";
import { Listado } from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [pregunta, setPregunta] = useState(true);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      //agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }
  }, [gasto, gastos, crearGasto, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
