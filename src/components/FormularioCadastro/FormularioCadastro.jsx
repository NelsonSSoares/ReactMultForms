import React, { useState } from "react";
import DadosEntregas from "./DadosEntregas";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuarios';

function FormularioCadastro({aoEnviar, validarCPF}) {
  
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      <DadosUsuario/>
      <DadosEntregas/>
    </>
  );
}

export default FormularioCadastro;
