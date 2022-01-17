import React, { useState } from "react";
import DadosEntregas from "./DadosEntregas";
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function FormularioCadastro({aoEnviar, validarCPF}) {

  const [etapaAtual, setEtapaAtual] = useState(0)

  const formularios = [
    <DadosUsuarios aoEnviar={proximo}/>,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>,
    <DadosEntregas aoEnviar={aoEnviar}/>];
  
  function proximo (dados){
    setEtapaAtual(etapaAtual+1)
  }




  return (
    <>
      { formularios[etapaAtual]}

    </>
  );
}



export default FormularioCadastro;
