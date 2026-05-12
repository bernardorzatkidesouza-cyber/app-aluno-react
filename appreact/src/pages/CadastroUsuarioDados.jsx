import { useState } from 'react';
import InputField from '../componentes/InputField';
import  '../assets/styles.css'
export default function CadastroUsuarioDados() {

 const [nome, setNome] = useState('');
 const [telefone, setTelefone] = useState('');
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 const [erro, setErro] = useState('');


 function handleSubmit(e) {
        e.preventDefault();
        if (!nome||!telefone||!email || !senha) { 
            setErro('Preencha todos os campos'); 
            return; }
         setErro('');
         console.log('Cadatro Dados:',nome,telefone, email, senha);
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
                        type="nome" 
                        value={email} 
                        onChange={e =>setNome(e.target.value)} />
                    <InputField 
                        label="Telefone" 
                        type="telefone" 
                        placeholder="00000-0000"
                        value={email} 
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
                <button type="submit">Entrar</button>
        
                </form>
            </div>


                

                <p class="registro">Não tem conta? <a href="/cadastro-usuario.jsx">Registre-se agora</a></p>


        </main>

    </div>
    
 
 </>
 );
}