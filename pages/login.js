import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from '../styles/Login'
import { withTransition } from '../transitionPage'
import { useUser } from '../hooks/useUser'

function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useUser()

    useEffect(() => {
        console.log({email});
        console.log({password});
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                <Button>Login</Button>
            </Form>
        </>
    )
}

export default withTransition(Login)