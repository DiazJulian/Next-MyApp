import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getPosts, getPost, LikeService, newPostService, NewCommentService, DeleteCommentService } from '../services/posts'
import { useUser } from './useUser'

export function usePost () {
  const { session } = useUser()
  const { query } = useRouter()
  const [posts, setPosts] = useState([])
  const [userPost, setUserPost] = useState('')
  const [likes, setLikes] = useState('')
  const [loading, setLoading] = useState(false)
  const [allComments, setAllComment] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
    allPosts()
  }, [loading, likes])

  useEffect(() => {
    getAllComments()
  }, [])

  const allPosts = async () => {
    if (session) {
      const res = await getPosts()
      setPosts(res)
      console.log(res)
    }
  }

  const newPost = async (user, profileImage, description) => {
    const res = await newPostService(user, profileImage, description)
    if (res) {
      setPosts(posts.concat(res))
      allPosts()
      console.log(res)
    }
  }

  const newLike = async (id) => {
    await LikeService(id)
    setLikes(likes + 1)
    setLoading(true)
    console.log('New Like')
  }

  const getAllComments = async () => {
    const postId = query.post
    if (postId) {
      const res = await getPost(postId)
      console.log(res)
      setAllComment(res.data.comment)
      setUserPost(res.data.post.user)
    }
  }

  const newComments = async (postId, name, profileImage, comment) => {
    const res = await NewCommentService(postId, name, profileImage, comment)
    console.log(postId)
    if (res) getAllComments()
  }

  const DeleteComment = async (Id) => {
    const res = await DeleteCommentService(Id)
    if (res) getAllComments()
  }

  return {
    posts,
    userPost,
    newPost,
    newLike,
    likes,
    loading,
    allComments,
    newComments,
    getAllComments,
    DeleteComment
  }
}
