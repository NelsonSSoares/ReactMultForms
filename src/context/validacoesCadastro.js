import React from 'react';

// logica de validação para reutilização em varios componentes

const validacoesCadastro = React.createContext(
  //  {cpf: validarCPF, senha: validarSenha, nome: validarSenha} // valor dafault 
    //validação default caso não seja definido com um provider
  );
/* 
function semvalidacao(dados){
    console.log(dados)
    return {valido:true, texto:""}
} */

export default  validacoesCadastro;