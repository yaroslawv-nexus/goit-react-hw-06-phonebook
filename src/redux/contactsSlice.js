
const initialContacts =    [
    { id: 'id-1', name: 'Test Contact', number: '459-12-56' },
  ]
;




export const contactsReducer = (state = initialContacts, action) => {
    switch (action.type) {
        case 'contacts/add':
            return [...state, action.payload];
        case 'contacts/remove':
            return state.filter(element => element.id !== action.payload);

        default:
            return state;
}

}

export const addContactSlice = newContact => {
    return {
        type: 'contacts/add',
        payload: newContact,
    }
}

export const removeContactSlice = contactId => {
    return {
        type: 'contacts/remove',
        payload: contactId,
    }
}