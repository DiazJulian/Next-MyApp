import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Button, Container, Form, H2 } from '../styles/components/Settings'

export function SettingsForm ({ user }) {
  const { name, userAdmin, updateRole } = useUser()
  const [inputRole, setNewRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, role } = user.user
    const uRole = role === 'Disable' ? 'Normal' : 'Disable'
    updateRole(name, uRole)
    window.location.reload()
  }

  const handleAdminSubmit = (e) => {
    e.preventDefault()
    const { name } = user.user
    updateRole(name, inputRole)
    window.location.reload()
  }

  return (
    <Container>
      {userAdmin &&
      <Form onSubmit={handleAdminSubmit}>
        <H2>Nuevo Role</H2>
        <input onChange={(e) => setNewRole(e.target.value)} />
        <Button>Cambiar</Button>
      </Form>
      }
      {(name === user.user.name) &&
        <Form onSubmit={handleSubmit}>
          <H2>Habilitar / Deshabilitar cuenta</H2>
          <Button>Cambiar</Button>
        </Form>
      }
    </Container>
  )
}
