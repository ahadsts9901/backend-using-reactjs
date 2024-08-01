import { postModel } from "../schema/postSchema"

export const getPosts = async () => {

    return new Promise(async (resolve, reject) => {

        try {

            const posts = await postModel.find().exec()
            resolve(posts)

        } catch (error) {
            console.error(error)
            reject(error)
        }

    })

}

export const createPost = async (body: { text: string }) => {

    return new Promise(async (resolve, reject) => {

        try {

            const { text } = body
            if (!text || text?.trim() === "") reject("no text provided")

            await postModel.create({ text: text })
            resolve("post created")

        } catch (error) {
            console.error(error)
            reject(error)
        }

    })

}

export const deletePost = async (id: string) => {

    return new Promise(async (resolve, reject) => {

        try {

            if (!id || id.trim() === "") reject("id not provided")
            await postModel.findByIdAndDelete(id)
            resolve("post deleted")

        } catch (error) {
            console.error(error)
            reject(error)
        }

    })

}

export const updatePost = async (id: string, body: { text: string }) => {

    return new Promise(async (resolve, reject) => {

        try {

            const { text } = body
            if (!text || text.trim() === "") reject("no text provided")
            if (!id || id.trim() === "") reject("id not provided")
            await postModel.findByIdAndUpdate({ _id: id }, { $set: { text: text } })
            resolve("post updated")

        } catch (error) {
            console.error(error)
            reject(error)
        }

    })

}