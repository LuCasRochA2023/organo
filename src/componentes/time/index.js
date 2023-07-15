import './time.css'
import Colaraboradores from '../colaboradores'
const Time=(props) => {
  return (  

    props.colaboradores.length>0 && <section className='time' style={{backgroundColor: props.cors}}>
        <h3 style={{borderColor: props.corp}}>{props.nome}</h3>
        <div className='colaboradores'>
            {props.colaboradores.map(colaborador=> <Colaraboradores nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
        </div>
            
    </section>
  )         
  }
  
export default Time