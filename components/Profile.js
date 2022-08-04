import { DivContainer, Image, Name } from '../styles/components/Profile'
import { Redes } from './Redes'

export function Profile ({ user }) {
  return (
    <DivContainer>
      <Image src={user.user.profileImage} alt="" />
      <Name>{user.user.name}</Name>
      <Redes user={user} />
    </DivContainer>
  )
}
