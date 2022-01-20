import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

function DadosEntregas({aoEnviar}) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    return (
        <form action="" onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({cep, endereco, numero, cidade, estado})
        }}>
            <TextField required
            value={cep}
            onChange={(event)=>{
                setCep(event.target.value)
            }}
            id="cep "
            name="cep"
            label="CEP" type="number"
            variant="outlined"
            margin="normal"  />
               
            <TextField required
            value={endereco}
            onChange={(event)=>{
                setEndereco(event.target.value)
            }}
            id="Endereco "
            name="endereco"
            label="Endereco"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth />

            <TextField required
            value={numero}
            onChange={(event)=>{
                setNumero(event.target.value)
            }}
            id="numero"
            name="numero"
            label="Numero"
            type="number"
            variant="outlined"
            margin="normal"  />
            
            <TextField required
            value={cidade}
            onChange={(event)=>{
                setCidade(event.target.value)
            }}
            id="cidade"
            name="cidade"
            label="Cidade"
            type="text"
            variant="outlined"
            margin="normal" />
            
            <TextField required
            value={estado}
            onChange={(event)=>{
                setEstado(event.target.value)
            }}
            id="Estado"
            name="estado"
            label="Estado"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth />
            
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>    
        </form>
    )
}

export default DadosEntregas;