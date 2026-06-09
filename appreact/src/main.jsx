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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
        <Route path="/CadastroUsuarioDados" element={<CadastroUsuarioDados/>}/>
        <route path="/RecuperarSenha" element={<RecuperarSenha/>}/>
        <route path="/NovaSenha" element={<NovaSenha/>}/>
      </Routes>
    </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>
)
