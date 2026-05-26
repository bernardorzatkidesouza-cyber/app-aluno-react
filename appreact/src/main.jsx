import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { UsuarioProvider } from './context/UsuarioContext.jsx'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import CadastroUsuario from './pages/CadastroUsuario.jsx'
import CadastroUsuarioDados from './pages/CadastroUsuarioDados.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
        <Route path="/CadastroUsuarioDados" element={<CadastroUsuarioDados/>}/>
      </Routes>
    </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>
)
