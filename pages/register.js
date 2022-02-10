import React, { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Form, Input, Button } from '../styles/Register'
import { withTransition } from '../transitionPage'

function Register () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImg] = useState('')
    console.log(profileImage);
    console.log(email);
    const {register} = useUser()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('password', password)
        data.append('perfil', profileImage)

        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        const res = await register(data,config)
        console.log(res);
        console.log(name);
    }

    return(
        <>  
            <Form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <Input type="file" name='perfil' onChange={(e) => setProfileImg(e.target.files[0])} />
                <Input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder="Username..." />
                <Input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                <Input type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                <Button>Register</Button>
            </Form>
        </>
    )
}

export default withTransition(Register)