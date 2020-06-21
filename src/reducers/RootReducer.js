const initState = {
    isMenuExpanded: false
}

const RootReducer = (state = initState, action) => {

    console.log("TOGGLE_MENU", state);
    if (action.type === 'TOGGLE_MENU') {
        return {
            ...state,
            isMenuExpanded: !state.isMenuExpanded
        }
    }
    return state;
}

export default RootReducer;