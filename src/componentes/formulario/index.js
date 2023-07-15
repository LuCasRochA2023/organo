import './formulario.css'
import CampoTexto from '../campoDeTexto'
import ListaSuspensa from '../listasuspensa'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props)=>{
    
    
    
    const [nome, setNome]=useState(' ')
    const [cargo,setCargo]=useState(' ')
    const [imagem,setImagem]=useState(' ')
    const [time,setTime]=useState('')
    const aoSalvar= (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        }) 
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return ( 

    <section className='formulario'>
        <form onSubmit={aoSalvar}>
                <h2>Preencha os dados:</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>
                <CampoTexto 
                label="Cargo" 
                placeholder="Digite seu cargo"
                obrigatorio={true}
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto 
                label="Imagem"
                placeholder="Informe sua imagem"
                valor={imagem}
                obrigatorio={true}
                aoAlterado={valor=>setImagem(valor)}/>
                <ListaSuspensa 
                itens={props.times}
                valor={time}
                obrigatorio={true}
                aoAlterado={valor => setTime(valor)}
                label="Time"
                />
            <Botao texto="Criar card"/>
        </form>
    </section>
    )
}
export default Formulario