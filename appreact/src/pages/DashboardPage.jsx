import { useState, useEffect } from 'react';
import { buscarUsuario } from '../services/githubService';
import '../assets/styles.css';
import { useUsuario } from '../context/UsuarioContext';

// Subcomponente interno para os Cards de Informação
function CardInfo({ titulo, valor, descricao }) {
  return (
    <div className="card">
      <div className="card__body">
        <span className="card__badge">{titulo}</span>
        <h3 className="card__title">{valor}</h3>
        {descricao && <p className="card__description">{descricao}</p>}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');
  const { username } = useUsuario();
  const [busca, setBusca] = useState(username);
  const [usernamebusca, setUsernameBusca] = useState('');
  
  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        const dados = await buscarUsuario(busca);
        setUsuario(dados);
        setErro('');
      } catch (err) {
        setErro(err.message || 'Erro ao buscar usuário');
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [busca]);

  // Função para pegar a saudação baseada no horário
  const obterSaudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    if (hora < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  // Data atual formatada
  const dataHoje = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (loading) return <p>Carregando perfil...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div className="dashboard__container">
      {/* Bloco de Boas-Vindas com dados Dinâmicos do GitHub */}
      <div className="welcome">
        <div className="dashboard__hero" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <img 
            src={usuario?.avatar_url} 
            alt={usuario?.login} 
            style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
          />
          <div>
            <h2 id="greeting">
              {obterSaudacao()}, {usuario?.name || usuario?.login}
            </h2>
            <p id="dataHoje">{dataHoje}</p>
          </div>
        </div>
        
        {usuario?.bio && <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"{usuario.bio}"</p>}
        
        <p>
          Bem-vindo de volta a sua sessão de estudos focado.
          Você tem {usuario?.public_repos > 0 ? 2 : 0} tarefas para essa semana
          e está atualmente adiantado em seu cronograma de leitura.
        </p>

        <a href={usuario?.html_url} target="_blank" rel="noreferrer" className="github-link">
          Ver perfil no GitHub →
        </a>
      </div>

      {/* Formulário de Busca de Usuário */}
      <form 
        onSubmit={e => { e.preventDefault(); if(usernamebusca.trim()) setBusca(usernamebusca); }}
        style={{ margin: '20px 0', display: 'flex', gap: '10px' }}
      >
        <input 
          type="text"
          placeholder="Buscar outro usuário GitHub..."
          value={username}
          onChange={e => setUsernameBusca(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
        />
        <button type="submit" style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
          Buscar
        </button>
      </form>

      {/* Cards de Cursos (Estáticos do seu HTML) */}
      <div className="card">
        <div className="card__body">
          <span className="card__badge">Em progresso</span>
          <h3 className="card__title">Front-end</h3>
          <p className="card__description">Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github</p>
          <div className="card__progress">
            <div style={{ width: '65%' }}>65%</div>
          </div>
        </div>
        <button className="card__button">Retomar estudo</button>
      </div>

      <div className="card">
        <div className="card__body">
          <span className="card__badge">Em progresso</span>
          <h3 className="card__title">UX Design</h3>
          <p className="card__description">Aula 3 - Usabilidade</p>
          <div className="card__progress">
            <div style={{ width: '34%' }}>34%</div>
          </div>
        </div>
        <button className="card__button">Retomar estudo</button>
      </div>

      {/* Grupo de Cards com as Métricas do GitHub */}
      <div className="card__group">
        <CardInfo titulo="Repositórios" valor={usuario?.public_repos} descricao="Repositórios públicos" />
        <CardInfo titulo="Seguidores" valor={usuario?.followers} descricao="Seguidores no GitHub" />
        <CardInfo titulo="Seguindo" valor={usuario?.following} descricao="Perfis seguidos" />
      </div>
    </div>
  );
}