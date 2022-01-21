import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import validacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuarios({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const validacoes = useContext(validacoesCadastro)

    const [erros,validarCampos, possoEnviar] = useErros(validacoes)

    

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
            
        }}>
            <TextField required
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth />

            <TextField required
             value={senha}
             onChange={(event)=>{
                 setSenha(event.target.value)
             }}
             onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha"
            name="senha"
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuarios;