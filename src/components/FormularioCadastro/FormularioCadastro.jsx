import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntregas from "./DadosEntregas";
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function FormularioCadastro({aoEnviar}) {

  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  
  useEffect(()=>{ //usado para atualizar estado e desmontar compponente
    //sempre que estado for atualizado
    if(etapaAtual === formularios.length - 1){
      aoEnviar(dadosColetados);
      console.log(dadosColetados)
    }
  })
  
  
  
  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntregas aoEnviar={coletarDados} />,
    <Typography variant="h5">Cadastro efetuado com sucesso!</Typography>
  ];

    

  

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
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
        
      </Stepper>
      { formularios[etapaAtual]}
      
    </>
  );
}



export default FormularioCadastro;
