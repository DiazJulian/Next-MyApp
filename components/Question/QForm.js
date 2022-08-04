import { Button, Form, H3, H4, Textarea } from '../../styles/components/Questions'

export function QForm ({ user }) {
  return (
    <Form>
      <H3>Preguntar a {user}</H3>
      <Textarea placeholder="Escribe algo..." />
      <Button>Enviar</Button>
      <H4>Estás por hacer una pregunta de forma anónima.</H4>
    </Form>
  )
}
