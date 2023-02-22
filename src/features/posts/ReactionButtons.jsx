import { useDispatch } from "react-redux"
import { addReaction } from "./postSlice"

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      onClick={() => dispatch(addReaction({ postId: post.id, reaction: name }))}
      // dispatch(reactionAdded({ postId: post.id, reaction: name }))
    >
      {emoji} {post.reactions[name]}
    </button>
  ))

  return <div>{reactionButtons}</div>
}

export default ReactionButtons
