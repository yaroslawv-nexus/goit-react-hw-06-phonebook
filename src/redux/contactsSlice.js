import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialContacts =  [{ id: 'id-1', name: 'Test Contact', number: '459-12-56' },
    { id: 'id-2', name: 'Test Contact2', number: '459-12-567' }
  ];

const Slice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    
    reducers: {
         addContactSlice: {reducer(state, action) {
              state.push(action.payload);
         }, prepare(contact) {
             return {
                 payload: {
                     ...contact,
                     id: nanoid(),
                }
            }
        }},
        removeContactSlice(state, action) {
            return state.filter(element => element.id !== action.payload);
        }
    }
})



export const contactsReducer = Slice.reducer;
export const { addContactSlice, removeContactSlice } = Slice.actions;


