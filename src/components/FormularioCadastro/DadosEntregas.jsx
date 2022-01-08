import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEntregas() {
    return (
        <form action="">
            <TextField id="cep " label="CEP" type="number" variant="outlined" margin="normal"  />
            <TextField id="Endereco " label="Endereco" type="text" variant="outlined" margin="normal" fullWidth />
            <TextField id="numero" label="Numero" type="number" variant="outlined" margin="normal"  />
            <TextField id="cidade" label="Cidade" type="text" variant="outlined" margin="normal" />
            <TextField id="Estado" label="Estado" type="text" variant="outlined" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>    
        </form>
    )
}

export default DadosEntregas;