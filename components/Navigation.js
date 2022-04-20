import Link from 'next/link'
import Logo from '../public/Logo2.svg'
import { Nav, A, Profile, ProfileCnt } from '../styles/Navigation'
import { useUser } from '../hooks/useUser'

export default function Navigation ({page}) {

    const { session, name, profileImage } = useUser()
    console.log(session, profileImage,page);

    return(
        <Nav>
            <>
                <Link href="/">
                    <A><Logo /></A>
                </Link>
            </>
            <div>
                {session ?
                    <ProfileCnt>
                        <Link href={`/user/${name}`}>
                            <Profile src={profileImage} alt="" />
                        </Link>
                        { (page === name) && <Link href="/logout"><A>Salir</A></Link>  }
                    </ProfileCnt> 
                    :
                    <>
                        <Link href="/login"><A>Login</A></Link>
                        <Link href="/register"><A>Register</A></Link>
                    </>
                }
            </div>
        </Nav>
    )
}