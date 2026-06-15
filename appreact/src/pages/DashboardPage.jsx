import { useState, useEffect } from 'react';
import InputField from '../componentes/InputField';
import '../assets/styles.css';
import "../assets/mobile.css"
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const [agora, setAgora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setAgora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const obterSaudacao = () => {
        const hora = agora.getHours();

        if (hora < 12) return "Bom dia";
        if (hora < 18) return "Boa tarde";
        return "Boa noite";
    };

    const dataAtual = agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const horaAtual = agora.toLocaleTimeString("pt-BR");

    return (
        <div className="dashboard">

            <header>
                <div className="dashboard__header">

                    <h1 className="dashboard__title">
                        Academia
                        <span>Portal do aluno</span>
                    </h1>

                    <nav className="dashboard__menu">
                        
                        <Link to="/Diciplinas">Diciplinas</Link>
                        <Link to="/TutorIA">Tutor IA</Link>
                        <Link to="/Perfil">Perfil</Link>
                    </nav>

                </div>
            </header>

            <div className="dashboard__body">

                <div className="dashboard__hero">
                    <h2 id="greeting">
                        {obterSaudacao()}, João
                    </h2>

                    <p id="data-atual">
                        {dataAtual} • {horaAtual}
                    </p>

                    <p>
                        Bem-vindo de volta à sua sessão de estudos focada.
                        Você tem duas tarefas para esta semana e está atualmente
                        adiantado em relação ao seu cronograma de leitura.
                    </p>
                </div>

                <div className="card">

                    <div className="card__body">
                        <span className="card__badge">
                            Em progresso
                        </span>

                        <h3 className="card__title">
                            Front-end
                        </h3>

                        <p>
                            Aula 2: Conceitos de desenvolvimento Front-end
                            e Git + GitHub
                        </p>

                        <div className="card__progress">
                            <div style={{ width: "65%" }}>
                                65%
                            </div>
                        </div>
                    </div>

                    <div className="card__footer">
                        <button
                            id="Front"
                            className="card__button"
                        >
                            Retomar estudos
                        </button>
                    </div>

                </div>

                <div className="card">

                    <div className="card__body">
                        <span className="card__badge">
                            Em progresso
                        </span>

                        <h3 className="card__title">
                            UX Design
                        </h3>

                        <p>
                            Aula 3: Conceitos de UX Design e
                            prototipagem
                        </p>

                        <div className="card__progress">
                            <div style={{ width: "36%" }}>
                                36%
                            </div>
                        </div>
                    </div>

                    <div className="card__footer">
                        <button
                            id="Ux"
                            className="card__button"
                        >
                            Retomar estudos
                        </button>
                    </div>

                </div>

                <div className="card__group">

                    <div className="card card--33">
                        <div className="card__body">

                            <span className="card__badge card__badge--title">
                                Tempo de estudo
                            </span>

                            <h3
                                id="tempo"
                                className="card__title"
                            >
                                12h 45m
                            </h3>

                            <p>Esta semana</p>

                        </div>
                    </div>

                    <div className="card card--33">
                        <div className="card__body">

                            <span className="card__badge card__badge--title">
                                Tarefas pendentes
                            </span>

                            <h3
                                id="tarefas"
                                className="card__title"
                            >
                                2
                            </h3>

                            <p id="vencimento">
                                Vencimento em 3 dias
                            </p>

                        </div>
                    </div>

                    <div className="card card--33">
                        <div className="card__body">

                            <span className="card__badge card__badge--title">
                                Chat com IA
                            </span>

                            <h3
                                id="chats"
                                className="card__title"
                            >
                                8
                            </h3>

                            <p>Tópicos ativos</p>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;