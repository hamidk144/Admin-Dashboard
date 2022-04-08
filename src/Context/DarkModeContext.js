import { createContext, useReducer } from "react"
import DarkModeReducer from "./DarkModeReducer";

const intial_state = {
    DarkMode: false,
}

export const DarkContext = createContext(intial_state);

export const DarkModeProvider = ({ children }) => {

    const [state, dispatch] = useReducer( DarkModeReducer, intial_state);

    return(<DarkContext.Provider value={ {DarkMode: state.DarkMode, dispatch} }>
        {children}
    </DarkContext.Provider>)

} 