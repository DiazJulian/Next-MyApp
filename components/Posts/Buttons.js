import React from 'react'
import { useButton } from '../../hooks/useButton'
import { faThumbsUp, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Container, LikeIcon, ViewIcon, DeleteIcon, FontAwesome } from '../../styles/components/Buttons'
import { useUser } from '../../hooks/useUser'

export function Buttons ({ post }) {
  const { likes, liked, NewLike, deletePost } = useButton(post)
  const { name } = useUser()

  const handleLike = () => {
    NewLike(post._id)
  }

  const handleDelete = () => {
    deletePost(post._id)
  }

  return (
    <Container>
      <LikeIcon disabled={liked} onClick={handleLike}>
        <FontAwesome icon={faThumbsUp} /> {likes}
      </LikeIcon>
      <ViewIcon>
        <FontAwesome icon={faEye} /> {post.views}
      </ViewIcon>
      { (name === post.user) &&
        <DeleteIcon onClick={handleDelete}>
          <FontAwesome icon={faTrash} />
        </DeleteIcon>
      }
    </Container>
  )
}
