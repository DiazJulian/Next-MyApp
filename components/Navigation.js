import React, { useEffect } from 'react'
import Link from 'next/link'
import Logo from '../public/Logo.svg'
import { Nav, A } from '../styles/Navigation'
import { getSession } from '../services/user'

export default function Navigation () {

    useEffect(() => {
        getSession()
    })

    return(
        <Nav>
            <>
                <Link href="/">
                    <A><Logo /></A>
                </Link>
            </>
            <div>
                <Link href="/login"><A>Login</A></Link>
                <Link href="/register"><A>Register</A></Link>
            </div>
        </Nav>
    )
}