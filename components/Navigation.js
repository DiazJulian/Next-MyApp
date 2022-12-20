import Link from 'next/link'
import Logo from '../public/Logo2.svg'
import { Nav, Div, A, Profile, ProfileCnt, Icon, FontAwesome } from '../styles/Navigation'
import { useUser } from '../hooks/useUser'
import { faGear, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Navigation ({ page }) {
  const { session, name, profileImage, userAdmin } = useUser()

  return (
        <Nav>
            <Link href="/">
                <Logo />
            </Link>
            <Div>
                {session
                  ? <>
                    <Link href="/users">
                      <Icon><FontAwesome icon={faUsers} /></Icon>
                    </Link>
                    <Link href="/update">
                        <Icon><FontAwesome icon={faPlus} /></Icon>
                    </Link>
                    <ProfileCnt>
                      <Link href={`/user/${name}`}>
                        <Profile src={profileImage} alt="" />
                      </Link>
                      { (page === name || userAdmin) &&
                      <Link href={`/user/${name}/settings`}>
                        <Icon><FontAwesome icon={faGear} /></Icon>
                      </Link>
                      }
                      {(page === 'settings') && <Link href="/logout"><A>Salir</A></Link>}
                    </ProfileCnt>
                    </>
                  : <>
                        <Link href="/login"><A>Iniciar Sesión</A></Link>
                        <Link href="/register"><A>Crear Cuenta</A></Link>
                    </>
                }
            </Div>
        </Nav>
  )
}
