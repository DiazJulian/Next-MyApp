import React, { useEffect, useState } from 'react'
import { Button, Form, H1, Input } from '../styles/Login'
import { withTransition } from '../transitionPage'
import { useUser } from '../hooks/useUser'
import Navigation from '../components/Navigation'

function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(true)

    const {login} = useUser()

    useEffect(() => {
        handleDisable()
    }, [email,password,isValid])

    const handleDisable = () => {
        if( email.length > 5 && password.length > 8 ) {
            setIsValid(false)
        }else{
            setIsValid(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
    }

    return(
        <>  
            <Navigation />
            <Form onSubmit={handleSubmit}>
                <H1>Inicia Sesión</H1>
                <Input type="email" onChange={(e) => setEmail(e.target.value)}
                 placeholder="Email..." />
                <Input type="password" onChange={(e) => setPassword(e.target.value)}
                 placeholder="Password..." />
                <Button disabled={isValid}>Iniciar Sesión</Button>
            </Form>
        </>
    )
}

export default withTransition(Login)