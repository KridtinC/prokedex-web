import { Dispatch, SetStateAction, createContext } from "react";

interface IAppContext {
    background: string
    setBackground: Dispatch<SetStateAction<string>>
}

const AppContext = createContext({} as IAppContext)

export {
    AppContext
}