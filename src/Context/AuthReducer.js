const AuthReducer = (state, action) => {

    switch (action.type) {

        case 'Login': 
            return {
                currentUser: action.payload
            }
        
        case 'Logout': 
            return {
                currentUser: null
            }
        
        default:
            return state;
            break;
};
}

export default AuthReducer;