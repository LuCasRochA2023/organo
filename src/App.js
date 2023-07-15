
import Formulario from './componentes/formulario';
import Banner from './componentes/banner/Banner';
import { useState } from 'react';
import Time from './componentes/time';
import Rodape from './componentes/rodape';
function App() {

  const times=[
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#B9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Develops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7EB'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]
  const  [colaboradores,setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado=(colaborador) => {
    
    setColaboradores([...colaboradores,colaborador])
   
  }
  return (
    
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corp={time.corPrimaria} 
      cors={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time===time.nome)}
      />)}  
      <Rodape/>
    </div>

  );
}

export default App;
