import React, { useState } from 'react'
import { useQuestion } from '../../hooks/useQuestion'
import { useUser } from '../../hooks/useUser'
import { Button, Container, FontAwesome, Form, H2, Icon, UserImg, Textarea } from '../../styles/components/QuestionComments'
import { ListComments } from './QListComments'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export function QuestionCommentCnt ({ post }) {
  const [comment, setComment] = useState('')
  const { name, profileImage } = useUser()
  const { allComments, newComment, deleteComment } = useQuestion()

  const handleChange = (e) => {
    setComment(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const postId = post.question._id
    newComment(postId, name, profileImage, comment)
    setComment('')
  }

  const handleDelete = (id) => {
    deleteComment(id)
  }

  return (
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
