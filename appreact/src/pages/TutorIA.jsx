import { useState } from 'react';
import InputField from '../componentes/InputField';
import '../assets/styles.css';
import "../assets/mobile.css"
import { useUsuario } from '../context/UsuarioContext';
import { Link, useNavigate } from 'react-router-dom';

function TutorIA() {
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

                        <Link to="/Diciplinas" className="menu__item">
                            <svg className="menu__icon" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 3v1h8V5H4zm0 3v1h8V8H4zm0 3v1h5v-1H4z" />
                            </svg>
                            Disciplinas
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

            <div className="dashboard__container tutor-page">

                <div className="chat-area">

                    <div className="chat-message">
                        <div className="chat-avatar">J</div>

                        <div className="chat-content">
                            <div className="chat-author">
                                João Silva
                            </div>

                            <div className="chat-text">
                                Explique computação quântica
                            </div>
                        </div>
                    </div>

                    <div className="chat-message">
                        <div className="chat-avatar chat-avatar--ia">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M8 1C8 1 9 5 13 6C9 7 8 11 8 11C8 11 7 7 3 6C7 5 8 1 8 1Z"
                                    fill="#555"
                                />
                            </svg>
                        </div>

                        <div className="chat-content">
                            <div className="chat-author">
                                Tutor IA
                            </div>

                            <div className="chat-text">
                                Computação quântica é uma forma avançada de computação
                                que usa as leis da mecânica quântica. Em vez de usar
                                bits tradicionais, que podem ser 0 ou 1, ela utiliza
                                qubits, que podem ser ambos ao mesmo tempo. Isso permite
                                que os computadores quânticos realizem cálculos muito
                                mais rapidamente do que os computadores comuns,
                                resolvendo problemas complexos que seriam impossíveis
                                para a tecnologia atual.
                            </div>

                            <div className="chat-actions">

                                <button className="chat-action-btn" title="Ouvir">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M3 6v4h2.5l3 3V3L5.5 6H3zm9.5-1.5a5 5 0 0 1 0 7" />
                                    </svg>
                                </button>

                                <button className="chat-action-btn" title="Copiar">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <rect
                                            x="4"
                                            y="4"
                                            width="8"
                                            height="10"
                                            rx="1"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            fill="none"
                                        />
                                        <path d="M2 2h8v2H2z" />
                                    </svg>
                                </button>

                                <button className="chat-action-btn" title="Regenerar">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5V1l3 2-3 2V3.5a4 4 0 1 0 4 4.5h1.5z" />
                                    </svg>
                                </button>

                                <button className="chat-action-btn" title="Ruim">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M10 2H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.5l1.5 4h1V9.5l2-1V3a1 1 0 0 0-1-1zm2 0v6h1.5V2H12z" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="chat-input-area">

                    <div className="chat-input-wrapper">

                        <button className="chat-attach-btn" title="Anexar">
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M13 6.5v5a5 5 0 0 1-10 0V4a3 3 0 1 1 6 0v7a1 1 0 1 1-2 0V5H5v6a3 3 0 0 0 6 0V4a5 5 0 0 0-10 0v7.5a7 7 0 0 0 14 0V6.5h-2z" />
                            </svg>
                        </button>

                        <input
                            type="text"
                            placeholder="Pergunte alguma coisa"
                        />

                        <button className="chat-send-btn" title="Enviar">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                                <path d="M8 2l6 12H2L8 2zm0 3L4.5 13h7L8 5z" />
                            </svg>
                        </button>

                    </div>

                    <p className="chat-disclaimer">
                        O Tutor pode cometer erros. Considere verificar informações importantes.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default TutorIA;

