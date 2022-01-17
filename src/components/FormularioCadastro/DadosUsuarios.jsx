import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuarios({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField required
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            id="email"
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
            id="senha"
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default DadosUsuarios;