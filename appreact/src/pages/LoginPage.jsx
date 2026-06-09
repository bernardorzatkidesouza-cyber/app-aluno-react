import { useState } from 'react';
import InputField from '../componentes/InputField';
import '../assets/styles.css';
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();
    const { setUsername } = useUsuario();

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !senha) {
            setErro('Preencha todos os campos');
            return;
        }

        setErro('');
        console.log('Login:', email, senha);
        setUsername(email);
        navigate('/dashboard');
    }

    return (
        <>
            <div className="container">

                <aside>
                    <p>
                        Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
                        <span>Albert Einstein</span>
                    </p>
                </aside>

                <main>
                    <div className="cadastro">

                        <h1>Bem-vindo de volta</h1>
                        <p>
                            Por favor, insira suas credenciais para acessar seu painel acadêmico
                        </p>

                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="E-mail"
                                type="text"
                                placeholder="user@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <InputField
                                label="Senha"
                                type="password"
                                placeholder="********"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />

                            <div style={{ textAlign: 'right', marginBottom: '10px' }}>
                                <span>Esqueceu sua senha? </span>
                                <Link to="/RecuperarSenha">Prosseguir</Link>
                            </div>

                            {erro && <p>{erro}</p>}

                            <button type="submit">Entrar</button>
                        </form>

                        <p className="registro">
                            Não tem conta?
                            <Link to="/CadastroUsuario"> Registre-se agora</Link>
                        </p>

                    </div>
                </main>

            </div>
        </>
    );
}