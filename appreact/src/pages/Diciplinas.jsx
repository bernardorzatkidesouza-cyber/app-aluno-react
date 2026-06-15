import { useState, useEffect } from 'react';
import InputField from '../componentes/InputField';
import '../assets/styles.css';
import "../assets/mobile.css"
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';

function Disciplinas() {
    return (
        <div className="dashboard">

            <nav className="menu">
                <div className="menu__body">
                    <h1 className="menu__title">
                        Academia
                        <span>Portal do Aluno</span>
                    </h1>

                    <div className="menu__links">
                        <Link to="/DashboardPage" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="1" y="1" width="6" height="6" rx="1" />
                                <rect x="9" y="1" width="6" height="6" rx="1" />
                                <rect x="1" y="9" width="6" height="6" rx="1" />
                                <rect x="9" y="9" width="6" height="6" rx="1" />
                            </svg>
                            Painel
                        </Link>

                        <Link to="/TutorIA" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <circle cx="8" cy="5" r="3" />
                                <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" />
                            </svg>
                            Tutor IA
                        </Link>

                        <Link to="/Perfil" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <circle cx="8" cy="5" r="3" />
                                <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" />
                            </svg>
                            Perfil
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="dashboard__container">

                <h2 className="page-title">Minhas Disciplinas</h2>

                <div className="disciplines-grid">

                    <div className="discipline-card">
                        <div className="discipline-card__header">
                            <h3 className="discipline-card__name">Front-end</h3>
                            <span className="discipline-card__badge discipline-card__badge--active">
                                Em Curso
                            </span>
                        </div>

                        <p className="discipline-card__teacher">
                            Prof. Marco Silva
                        </p>

                        <div className="discipline-card__progress-label">
                            <span>Progresso</span>
                            <span>75%</span>
                        </div>

                        <div className="discipline-card__progress-bar">
                            <div
                                className="discipline-card__progress-fill"
                                style={{ width: "75%" }}
                            />
                        </div>

                        <button className="discipline-card__btn">
                            Acessar Disciplina
                        </button>
                    </div>

                    <div className="discipline-card">
                        <div className="discipline-card__header">
                            <h3 className="discipline-card__name">UX Design</h3>
                            <span className="discipline-card__badge discipline-card__badge--next">
                                Próximo Semestre
                            </span>
                        </div>

                        <p className="discipline-card__teacher">
                            Dra. Ana Lúcia
                        </p>

                        <div className="discipline-card__progress-label">
                            <span>Disponibilidade</span>
                            <span>0%</span>
                        </div>

                        <div className="discipline-card__progress-bar">
                            <div
                                className="discipline-card__progress-fill"
                                style={{ width: "0%" }}
                            />
                        </div>

                        <button className="discipline-card__btn">
                            Acessar Disciplina
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Disciplinas;

