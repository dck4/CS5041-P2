
// our react redux store for shared state
import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: localStorage.getItem("username")
    },
    reducers: {
      loggedin: (state, payload) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        let name = payload.payload
        state.username = name
        localStorage.setItem("username", name)
      },
      loggedout: state => {
        state.username = null
        localStorage.removeItem("username")
      }
    }
})
  
export const { loggedin, loggedout } = userSlice.actions
  
export const store = configureStore({
    reducer: userSlice.reducer
})