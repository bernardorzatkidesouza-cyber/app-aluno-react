import { useState } from 'react';
import InputField from '../componentes/InputField';
import  '../assets/styles.css'
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';

export default function RecuperarSenhaPage() {
    const [email, setEmail] = useState('');

    return (
        <div className="container">

            <aside>
                <p>
                    Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
                    <span>Albert Einstein</span>
                </p>
            </aside>

            <main>
                <div className="cadastro">
                    <h1>Esqueceu a senha</h1>
                    <p>
                        Informe seu e-mail para enviarmos um link para redefinir sua senha.
                    </p>

                    <form>
                        <label htmlFor="email">Endereço de e-mail</label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="user@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <br />

                        <Link to="/NovaSenha">Prosseguir</Link>
                    </form>
                </div>
            </main>

        </div>
    );
}


