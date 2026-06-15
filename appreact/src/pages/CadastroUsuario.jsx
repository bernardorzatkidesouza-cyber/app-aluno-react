import { useState } from 'react';
import InputField from '../componentes/InputField';
import  '../assets/styles.css'
import "../assets/mobile.css"
import { Link } from 'react-router-dom';
import { useUsuario } from '../context/UsuarioContext';
export default function CadastroUsuario() {
 const { usuario, setUsuario } = useUsuario();
 const [cpf, setCpf] = useState('');
 const [erro, setErro] = useState('');


 function handleSubmit(e) {
    e.preventDefault();

    if (!cpf) {
        setErro('Preencha todos os campos');
        return;
    }

    setUsuario({
        ...usuario,
        cpf
    });

    setErro('');
 }
    

 return (
    <>
        <main>
            <div class="container">

        <aside>
            <p>
                Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
                <span>Albert Einstein</span>
            </p>
        </aside>

        <main>

            <div class="cadastro">
                <h1>Cadastre-se</h1>
                <p>Passo 1 de 2. Por favor, insira seu cpf para prosseguir.</p>

                <label for="cpf">CPF</label>
                <InputField 
                 
                    type="cpf" 
                    placeholder="000.000.000-00"
                    value={cpf} 
                    onChange={e =>setCpf(e.target.value)} />
                {erro && <p>{erro}</p>}
                

                <button onClick={handleSubmit}><Link to='/CadastroUsuarioDados'>prosseguir</Link></button>
                
            </div>

        </main>
    </div>
        </main>

    

    
 </>
 );
}

