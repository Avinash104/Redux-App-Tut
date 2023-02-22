import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllUsers } from "../users/userSlice"
import { addPost } from "./postSlice"

const AddPost = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    author: "",
  })

  //there is a lot of rerendering here. Not able to figure out how to useMomo here
  //in order to reduce the number of re-renders
  useEffect(() => {
    if (!formValues.content || !formValues.title || !formValues.author) {
      setIsSubmitDisabled(true)
      console.log("Button has been disabled ")
    } else {
      setIsSubmitDisabled(false)
      console.log("Button has been enabled")
    }
  }, [formValues])

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!formValues.content || !formValues.title || !formValues.author) {
      setIsSubmitDisabled(true)
      console.log("Field not present")
    } else {
      setFormValues({ ...formValues, date: new Date().toISOString })
      dispatch(addPost(formValues.title, formValues.content, formValues.author))
      setFormValues({
        title: "",
        content: "",
        author: "",
      })
    }
  }
  return (
    <div className="max-w-[500px] mx-auto">
      <input
        type="text"
        name="title"
        value={formValues.title}
        placeholder="Title"
        className="ring-offset-0 my-5 h-10 rounded-lg border-[1.5px] border-lime-500 outline-none inline-flex w-full px-2"
        onChange={onChangeHandler}
      />
      <br />
      <input
        type="textarea"
        name="content"
        value={formValues.content}
        placeholder="Content"
        className="ring-offset-0 my-5 h-10 rounded-lg border-[1.5px] border-lime-500 outline-none inline-flex w-full px-2"
        onChange={onChangeHandler}
      />
      <br />
      <label htmlFor="author" className="text-xl font-semibold">
        {" "}
        Author{" "}
      </label>
      <select
        name="author"
        onChange={onChangeHandler}
        value={formValues.author}
        className="w-32 h-8 rounded-lg mx-2"
      >
        <option value=""></option>
        {users.map((user, index) => (
          <option key={index} value={user.author}>
            {user.author}
          </option>
        ))}
      </select>
      <br />
      <button
        className="px-5 py-3 mt-5 rounded-lg shadow-xs hover:shadow-xl border-2 font-bold text-lg hover:text-xl hover:px-4 hover:border-green-400 bg-lime-500 hover:ring-offset-2 hover:ring-emerald-500"
        onClick={onSubmitHandler}
        disabled={isSubmitDisabled}
      >
        Add Post
      </button>
    </div>
  )
}

export default AddPost
