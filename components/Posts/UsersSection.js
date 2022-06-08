import { useEffect, useState } from 'react'
import { getUsers } from '../../services/user'
import { Container, UL, Img } from '../../styles/components/Section'

export function Users () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const allUsers = async () => {
      const users = await getUsers()
      setUsers(users)
    }
    allUsers()
    console.log(users)
  }, [])

  return (
      <Container>
        {users && users.splice(0, 5).map(user => (
          <User key={user.name} {...user} />
        ))}
      </Container>
  )
}

const User = ({ ...user }) => (
    <UL>
      <Img src={user.profileImage} alt="" />
    </UL>
)
