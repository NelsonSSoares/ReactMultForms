import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntregas from "./DadosEntregas";
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function FormularioCadastro({aoEnviar, validarCPF}) {

  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  
  useEffect(()=>{ //usado para atualizar estado e desmontar compponente
    //sempre que estado for atualizado
    console.log(dadosColetados);
  })
  
  
  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF}/>,
    <DadosEntregas aoEnviar={coletarDados}/>];

  

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados})
    console.log(dadosColetados);
    proximo()
  }

  function proximo (){
    setEtapaAtual(etapaAtual+1)
  }




  return (
    <>
      { formularios[etapaAtual]}

    </>
  );
}



export default FormularioCadastro;
