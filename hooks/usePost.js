import { useEffect,useState } from 'react'
import { deletePostService, getPosts, newPostService } from '../services/posts'

export function usePost () {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    allPosts()
  },[])
  
  const allPosts = async () => {
    const res = await getPosts()
    setPosts(posts.concat(res))
    console.log(res)
  }

  const newPost = async (user,profileImage,description) => {
    const res = await newPostService(user,profileImage,description)
    allPosts()
  }

  const deletePost = async (id) => {
    await deletePostService(id)
    console.log('Delete');
  }

  return{
    posts,
    newPost,
    deletePost
  }
}