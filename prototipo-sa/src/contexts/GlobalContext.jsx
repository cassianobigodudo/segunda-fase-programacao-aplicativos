import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
// let bairro = 'Canasvieiras'
const [bairro, setBairro] = useState('Canasvieiras')


    return(
        <GlobalContext.Provider value={{usuarioLogado, bairro, setBairro}}>
            {children}
        </GlobalContext.Provider>
    )
}
