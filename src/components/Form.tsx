import { useState } from "react"
import { createPost } from "../backend/routes/post"

const Form = () => {

    const [text, setText] = useState<string | null>(null)

    const addPost = async (e: any) => {

        e?.preventDefault()

        try {

            if (!text || text?.trim() === "") return

            const body = {
                text: text
            }

            const addPostResp = await createPost(body)

            console.log(addPostResp)

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <form onSubmit={addPost}>
            <input type="text" onChange={(e: any) => setText(e.target.value)} placeholder="Enter text..."
                style={{ marginRight: "1em" }}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default Form