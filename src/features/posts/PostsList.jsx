import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import ReactionButtons from "./ReactionButtons"
import TimeAgo from "./TimeAgo"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const renderedPosts = posts.map((post, index) => (
    <article
      key={index}
      className="border-2 rounded-2xl border-red-400 p-4 h-32 my-4"
    >
      <h3 className="text-3xl font-semibold">
        {post.id}
        {". "} {post.title}
      </h3>
      <p className="text-2xl">{post.content.substring(0, 100)}</p>
      <p className="flex justify-between">
        {post.author}
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ))
  return (
    <div className="max-w-[500px] mx-auto">
      <h1 className="text-4xl font-bold m-4">Posts</h1>
      {renderedPosts}
    </div>
  )
}

export default PostsList
