import { useEffect, useState } from "react"
import "../App.css"
import Form from "./Form"
import { getPosts } from "../backend/routes/post"
import TodoComp from "./TodoComp"

const Main = () => {

    const [posts, setPosts] = useState<string[]>([])

    useEffect(() => {
        _getPosts()
    }, [])

    const _getPosts = async () => {

        try {

            const _posts: any = await getPosts()
            setPosts(_posts)

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
            <h4>Reactjs Backend Without Expressjs (Experiment)</h4>
            <Form />
            <div className="posts">
                {posts?.map((post: any, i: number) => <TodoComp key={i} getPosts={_getPosts} text={post?.text} _id={post?._id} />)}
            </div>
        </>
    )
}

export default Main