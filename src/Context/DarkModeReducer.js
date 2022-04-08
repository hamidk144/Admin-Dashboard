const DarkModeReducer = (state, action) => {

    switch (action.type) {
        case 'LightMode': {
            return {
                DarkMode: false
            }
            break;
        }
        case 'DarkMode': {
            return {
                DarkMode: true
            }
            break;
        }
        case 'Toggle': {
            return {
                DarkMode: !state.DarkMode
            }
            break;
        }
        default:
            return state;
    }

}

export default DarkModeReducer;