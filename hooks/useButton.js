import { useState } from 'react'
import { LikeService, deletePostService } from '../services/posts'

// Creamos un hook para interacción de los usuarios con los posts
// para en un futuro manejar mas datos
export function useButton ({ post }) {
  const [likes, setLikes] = useState(post.likes)
  const [liked, setLiked] = useState(false)

  const NewLike = async (id) => {
    const res = await LikeService(id)
    if (res) {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  const deletePost = async (id) => {
    await deletePostService(id)
    console.log('Delete')
  }

  return {
    likes,
    liked,
    NewLike,
    deletePost
  }
}
