import AddPost from "./features/posts/AddPost"
import PostsList from "./features/posts/PostsList"

function App() {
  return (
    <div className="mt-10">
      <PostsList />
      <AddPost />
    </div>
  )
}

export default App
