import React, { useState } from 'react'
import { usePost } from '../../hooks/usePost'
import { useUser } from '../../hooks/useUser'
import { Button, Container, FontAwesome, Form, H2, Icon, UserImg, Textarea } from '../../styles/components/Comments';
import { ListComments } from './ListComments'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export function CommentContainer ({post}) {
  const [comment, setComment] = useState('')
  const { name,profileImage } = useUser()
  const { allComments,newComments,DeleteComment } = usePost()

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const postId = post.post._id
    newComments(postId,name,profileImage,comment)
    setComment('')
  }

  const handleDelete = (id) => {
    DeleteComment(id)
  }

  return(
    <Container>
      <H2>Comentarios: {allComments.length}</H2>
      <Form onSubmit={handleSubmit}>
        <UserImg src={profileImage} alt="" />
        <Textarea type="text" table="2" onChange={handleChange} value={comment}
         placeholder="Escribe un comentario..." />
        {
          comment &&
          <Button>
            <Icon><FontAwesome icon={faPaperPlane} /></Icon>
          </Button>
        }
      </Form>
      <ListComments comments={allComments} deleteCmt={handleDelete} />
    </Container>
  )
}