import { useState } from 'react'
import { newQuestion } from '../../services/posts'
import { Button, Form, H3, H4, Textarea } from '../../styles/components/Questions'

export function QForm ({ user }) {
  const [question, setQuestion] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await newQuestion(user, question)
    setQuestion('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H3>Preguntar a {user}</H3>
      <Textarea placeholder="Escribe algo..." value={question}
      onChange={(e) => setQuestion(e.target.value)} />
      <Button>Enviar</Button>
      <H4>Estás por hacer una pregunta de forma anónima.</H4>
    </Form>
  )
}
