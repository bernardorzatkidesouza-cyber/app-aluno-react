import { useState } from 'react';
import InputField from '../componentes/InputField';
import '../assets/styles.css';
import "../assets/mobile.css"
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';

function Perfil() {
    return (
        <div className="dashboard">

            <nav className="menu">
                <div className="menu__body">
                    <h1 className="menu__title">
                        Academia
                        <span>Portal do Aluno</span>
                    </h1>

                    <div className="menu__links">
                        <Link to="/dashboard" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="1" y="1" width="6" height="6" rx="1" />
                                <rect x="9" y="1" width="6" height="6" rx="1" />
                                <rect x="1" y="9" width="6" height="6" rx="1" />
                                <rect x="9" y="9" width="6" height="6" rx="1" />
                            </svg>
                            Painel
                        </Link>

                        <Link to="/diciplinas" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 3v1h8V5H4zm0 3v1h8V8H4zm0 3v1h5v-1H4z" />
                            </svg>
                            Disciplinas
                        </Link>

                        <Link to="/TutorIA" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <circle cx="8" cy="5" r="3" />
                                <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" />
                            </svg>
                            Tutor IA
                        </Link>

                    </div>
                </div>
            </nav>

            <div className="dashboard__container">

                <div className="profile-header">
                    <div className="profile-avatar">
                        JS
                    </div>

                    <div>
                        <h2>João Silva</h2>
                        <p>Engenharia de Software • 3º Ano</p>
                    </div>
                </div>

                <div className="tabs">
                    <a href="#" className="tab tab--active">
                        Dados Pessoais
                    </a>

                    <a href="#" className="tab">
                        Configurações
                    </a>

                    <a href="#" className="tab">
                        Segurança
                    </a>
                </div>

                <div className="info-table">
                    <div className="info-row">
                        <span className="info-label">
                            Nome Completo
                        </span>
                        <span className="info-value">
                            João Silva
                        </span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">
                            Nome de Preferência
                        </span>
                        <span className="info-value">
                            Jonh
                        </span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">
                            Endereço de E-mail
                        </span>
                        <span className="info-value">
                            joao.silva@satc.edu.br
                        </span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">
                            Matrícula / CPF
                        </span>
                        <span className="info-value">
                            ***.***.***-89
                        </span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">
                            Número de Telefone
                        </span>
                        <span className="info-value info-value--empty">
                            Não fornecido
                        </span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Perfil;

