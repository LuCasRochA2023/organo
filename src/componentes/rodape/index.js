import './rodape.css'

const Rodape=() =>{
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="../imagens/fb.png" alt="imagem fb"></img>
                        </a>
                    </li>
                    <li>
                        <a href="twiter.com" target="_blank">
                            <img src="../imagens/tw.png" alt="imagem tw"></img>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="../imagens/ig.png" alt="imagem instagram"></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="../imagens/logo.png" alt="imagem logo"></img>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Rodape