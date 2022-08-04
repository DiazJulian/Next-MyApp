import { Card, Container, QH3 } from '../../styles/components/Questions'
import { QForm } from './QForm'

export function Questions ({ user }) {
  return (
    <>
    <QForm user={user} />
    <Container>
      <Card>
        <QH3>Que onda crack?</QH3>
      </Card>
      <Card>
        <QH3>Que onda crack? pinta un futbol?</QH3>
      </Card>
      <Card>
        <QH3>Que onda crack? Que onda crack? pinta un futbol? Que onda crack? pinta un futbol?</QH3>
      </Card>
      <Card>
        <QH3>Que onda crack? Que onda crack? pinta un futbol? Que onda crack? Que onda crack? pinta un futbol? Que onda crack? pinta un futbol?</QH3>
      </Card>
    </Container>
    </>
  )
}
