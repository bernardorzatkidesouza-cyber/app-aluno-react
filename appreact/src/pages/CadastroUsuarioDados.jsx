import { useState } from 'react';
import InputField from '../componentes/InputField';
import  '../assets/styles.css'
import "../assets/mobile.css"
import { useUsuario } from '../context/UsuarioContext';
import { Link } from 'react-router-dom';
export default function CadastroUsuarioDados() {
 const { usuario, setUsuario } = useUsuario();
 const [nome, setNome] = useState('');
 const [telefone, setTelefone] = useState('');
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 const [erro, setErro] = useState('');


 function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !telefone || !email || !senha) {
        setErro('Preencha todos os campos');
        return;
    }

    setUsuario({
        ...usuario,
        nome,
        primeiroNome: nome.split(' ')[0],
        telefone,
        email
    });

    console.log('Dados salvos');
 }
    

 return (
    <>

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
                <p>Passo 2 de 2. Por favor, insira os dados para finalizar.</p>
        
                    <form onSubmit={handleSubmit}>
                    <InputField
                         label="Nome"
                         type="text"
                         value={nome}
                         onChange={e => setNome(e.target.value)}/>
                    <InputField 
                        label="Telefone" 
                        type="text" 
                        placeholder="00000-0000"
                        value={telefone} 
                        onChange={e =>setTelefone(e.target.value)} />
                    <InputField 
                        label="E-mail" 
                        type="email" 
                        placeholder="user@email.com"
                        value={email} 
                        onChange={e =>setEmail(e.target.value)} />

                    <InputField 
                        label="Senha" 
                        type="password"
                        placeholder="********" 
                        value={senha} 
                        onChange={e =>setSenha(e.target.value)} />
                {erro && <p>{erro}</p>}
                <button onClick={handleSubmit}><Link to='/dashboard'>prosseguir</Link></button>
        
                </form>
            </div>


                

                


        </main>

    </div>
    
 
 </>
 );
}