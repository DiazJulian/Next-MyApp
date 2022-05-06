import React, { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { Button, Form, Icon, Image, Textarea } from '../../styles/components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { usePost } from '../../hooks/usePost'

export default function FormPost () {

  const { newPost } = usePost()
  const [description, setDescription] = useState('')
  const { name,profileImage } = useUser()

  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    newPost(name,profileImage,description)
    setDescription('')
  }

  return(
    <>
      <Form onSubmit={handleSubmit}>
      <Image src={profileImage} alt="" />
      <Textarea type="text" table="2" value={description} placeholder="Escribe algo..."
        onChange={handleChange} />
      {
        description &&
        <Button>
          <Icon>
            <FontAwesomeIcon icon={faPaperPlane} />
          </Icon>
        </Button>
      }
      </Form>
    </>
  )
}