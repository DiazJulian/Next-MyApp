import { useEffect, useState } from 'react'
import { getUsers } from '../services/user'

export function Users () {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const allUsers = async () => {
      const users = await getUsers()
      setUsers(users)
    }
    allUsers()
    console.log(users);
  }, [])

  return(
      <ul>
        {users && users.map(user => (
          <User key={user.name} {...user} />
        ))}
      </ul>
  )
}

const User = (user) => (
  <li>{user.name}</li>
)