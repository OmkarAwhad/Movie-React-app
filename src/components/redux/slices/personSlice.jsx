import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     info: [],
}

export const personSlice = createSlice({
     name: 'person',
     initialState,
     reducers: {
          //actions
          loadperson: (state, action) => {
               state.info = action.payload
          },
          removeperson: (state, action) => {
               state.info = null
          }
     },
})

// Action creators are generated for each case reducer function
export const { loadperson, removeperson } = personSlice.actions

export default personSlice.reducer