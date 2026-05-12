import { useState } from 'react';
import InputField from '../componentes/InputField';
import  '../assets/styles.css'
export default function LoginPage() {

 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 const [erro, setErro] = useState('');


 function handleSubmit(e) {
        e.preventDefault();
        if (!email || !senha) { 
            setErro('Preencha todos os campos'); 
            return; }
         setErro('');
         console.log('Login:', email, senha);
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

                <h1>Bem-vindo de volta</h1>
                <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>
                   <form onSubmit={handleSubmit}>
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

                

                <p class="registro">Não tem conta? <a href="/cadastro-usuario.jsx">Registre-se agora</a></p>

            </div>
        </main>

    </div>

 
 </>
 );
}