import { DisableImage, DisableName, DivContainer, Image, Name } from '../styles/components/Profile'
import { Redes } from './Redes'

export function Profile ({ user, role }) {
  const URL = 'https://res.cloudinary.com/dhehnqygp/image/upload/v1625190194/sq6ou90ayk95qnpa7lbt.jpg'
  return (
    <DivContainer>
      {(role === 'Disable')
        ? <>
        <DisableImage src={URL} alt="" />
        <DisableName>Usuario inhabilitado</DisableName>
        </>
        : <>
        <Image src={user.user.profileImage} alt="" />
        <Name>{user.user.name}</Name>
        <Redes user={user} />
        </>
      }
    </DivContainer>
  )
}
