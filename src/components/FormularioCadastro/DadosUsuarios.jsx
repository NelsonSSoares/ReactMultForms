import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuarios({aoEnviar}){
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({});
        }}>
            <TextField required id="email" label="Email" type="email" variant="outlined" margin="normal" fullWidth/>
            <TextField required id="senha" label="Senha" type="password" variant="outlined" margin="normal" fullWidth/>
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>    
        </form>
    );
}

export default DadosUsuarios;