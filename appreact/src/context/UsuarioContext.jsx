import { createContext, useContext, useState } from 'react';

const UsuarioContext = createContext(null);

export function UsuarioProvider({ children }) {

    const [usuario, setUsuario] = useState({
        nome: '',
        primeiroNome: '',
        cpf: '',
        telefone: '',
        email: ''
    });

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
}

export const useUsuario = () => useContext(UsuarioContext);