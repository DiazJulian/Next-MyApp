import Link from 'next/link'
import Logo from '../public/Logo2.svg'
import { Nav, Div, A, Profile, ProfileCnt } from '../styles/Navigation'
import { useUser } from '../hooks/useUser'

export default function Navigation ({page}) {

    const { session, name, profileImage } = useUser()

    return(
        <Nav>
            <Link href="/">
                <A><Logo /></A>
            </Link>
            <Div>
                {session ?
                    <ProfileCnt>
                        <Link href={`/user/${name}`}>
                            <Profile src={profileImage} alt="" />
                        </Link>
                        { (page === name) && <Link href="/logout"><A>Salir</A></Link>  }
                    </ProfileCnt> 
                    :
                    <>
                        <Link href="/login"><A>Iniciar Sesión</A></Link>
                        <Link href="/register"><A>Crear Cuenta</A></Link>
                    </>
                }
            </Div>
        </Nav>
    )
}