import { useState } from 'react';
import InputField from '../componentes/InputField';
import  '../assets/styles.css'
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';


export default function NovaSenhaPage() {
    const [senha, setSenha] = useState('');
    const [repitaSenha, setRepitaSenha] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (senha !== repitaSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        console.log('Nova senha:', senha);
    }

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
                    <h1>Nova Senha</h1>
                    <p>Informe abaixo sua nova senha.</p>

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="senha">Senha</label>
                        <input
                            name="senha"
                            id="senha"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <br />

                        <label htmlFor="repitaSenha">Repita a Senha</label>
                        <input
                            name="repitaSenha"
                            id="repitaSenha"
                            type="password"
                            value={repitaSenha}
                            onChange={(e) => setRepitaSenha(e.target.value)}
                        />

                        <br />

                        <Link to="/LoginPage">Prosseguir</Link>

                    </form>
                </div>
            </main>

        </div>
    );
}