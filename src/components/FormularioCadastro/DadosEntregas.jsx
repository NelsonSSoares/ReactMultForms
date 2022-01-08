import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEntregas() {
    return (
        <form action="">
            <TextField required id="cep " label="CEP" type="number" variant="outlined" margin="normal"  />
            <TextField required id="Endereco " label="Endereco" type="text" variant="outlined" margin="normal" fullWidth />
            <TextField required id="numero" label="Numero" type="number" variant="outlined" margin="normal"  />
            <TextField required id="cidade" label="Cidade" type="text" variant="outlined" margin="normal" />
            <TextField required id="Estado" label="Estado" type="text" variant="outlined" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>    
        </form>
    )
}

export default DadosEntregas;