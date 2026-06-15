import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { UsuarioProvider } from './context/UsuarioContext.jsx'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import CadastroUsuario from './pages/CadastroUsuario.jsx'
import CadastroUsuarioDados from './pages/CadastroUsuarioDados.jsx'
import NovaSenha from './pages/NovaSenha.jsx'
import RecuperarSenha from './pages/RcuperarSenha.jsx'
import TutorIA from './pages/TutorIA.jsx'
import Perfil from './pages/Perfil.jsx'
import Diciplinas from './pages/Diciplinas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
        <Route path="/CadastroUsuarioDados" element={<CadastroUsuarioDados/>}/>
        <Route path="/RecuperarSenha" element={<RecuperarSenha/>}/>
        <Route path="/NovaSenha" element={<NovaSenha/>}/>
        <Route path="/TutorIA" element={<TutorIA />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Diciplinas" element={<Diciplinas />} />
      </Routes>
    </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>
)
