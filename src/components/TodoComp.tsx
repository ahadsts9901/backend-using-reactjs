import { isValidObjectId } from "mongoose"
import { deletePost, updatePost } from "../backend/routes/post"

const TodoComp = ({ text, _id, getPosts }: { text: string, _id: string, getPosts: any }) => {

    const _deletePost = async () => {

        if (!_id || _id?.trim() === "") return
        if (!isValidObjectId(_id)) return

        try {

            await deletePost(_id)
            getPosts()
            alert("post deleted")

        } catch (error) {
            console.error(error)
        }

    }

    const _editPost = async () => {

        if (!_id || _id?.trim() === "") return
        if (!isValidObjectId(_id)) return

        const newText = prompt("edit text", text)

        if (!newText || newText?.trim() === "") return

        try {

            await updatePost(_id, { text: newText })
            getPosts()
            alert("post updated")

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={_deletePost}>Delete</button>
            <button onClick={_editPost}>Edit</button>
        </div>
    )
}

export default TodoComp