import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    author: "Jeff",
  },
  {
    id: 2,
    author: "Jety",
  },
  {
    id: 3,
    author: "Dave",
  },
]

const postsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const selectAllUsers = (state) => state.users
// export const {} = postsSlice.actions

export default postsSlice.reducer
