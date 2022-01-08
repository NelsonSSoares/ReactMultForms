import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntregas from "./DadosEntregas";
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function FormularioCadastro({aoEnviar, validarCPF}) {

  const [etapaAtual, setEtapaAtual] = useState(0)
  
  function proximo (){
    setEtapaAtual(etapaAtual+1)
  }

  function formularioAtural(etapaAtual){
    switch (etapaAtual) {
      case 0:
          return <DadosUsuarios aoEnviar={proximo}/>
        break;
  
      case 1:
          return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>
          //aoEnviar={aoEnviar} validarCPF={validarCPF}
        break;
      case 2:
          return <DadosEntregas aoEnviar={aoEnviar}/>
        break; 
  
      default:
          return <Typography>Erro ao Selecionar o Formulario</Typography>
        break;
    }
  }


  return (
    <>
      { formularioAtural(etapaAtual) }

    </>
  );
}



export default FormularioCadastro;
