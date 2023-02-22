import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  {
    id: "1",
    title: "Learning Redux",
    content: "IYTRSgsh hdgdgs jjjj blah blah!!",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Learning Redux 2",
    content: "IYTRSgsh hdgdgs jjjj blah blah!!",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            author,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        }
      },
    },
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const selectAllPosts = (state) => state.posts
export const { addPost, addReaction } = postsSlice.actions
export default postsSlice.reducer
