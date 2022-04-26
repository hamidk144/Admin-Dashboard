import { createContext,  useEffect,  useReducer } from "react";
import AuthReducer from "./AuthReducer";


const intial_state={
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
}

export const AuthContext= createContext(intial_state);

export const AuthContextProvider = ({children}) => {

    const [state, dispatch]= useReducer(AuthReducer, intial_state);

    useEffect(()=>{

        localStorage.setItem("user", JSON.stringify(state.currentUser))

    },[state.currentUser])

   return( 
   <AuthContext.Provider value={ {currentUser:state.currentUser, dispatch} } >
        {children}
    </AuthContext.Provider>)


}