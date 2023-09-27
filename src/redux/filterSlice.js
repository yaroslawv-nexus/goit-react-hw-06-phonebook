export const filterReducer = (state = '', action)  => {
     
    switch (action.type) {

        case 'filter/change':
            return action.payload;
           
        default:
            return state;
}

}

export const changeFilter = newFilter => {
    return {
        type: 'filter/change',
        payload: newFilter,
    }
}