import { useState } from 'react';
import Banner from './componentes/Banner';
import Botao from './componentes/Botao';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)}/>
      <Botao />
    </div>
  );
}

export default App;
