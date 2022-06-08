import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import { useUser } from '../hooks/useUser'
import { Form, Input, Button, H1, ImageCnt, Image, Label } from '../styles/Register'
import { withTransition } from '../transitionPage'

function Register () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profileImage, setProfileImg] = useState('')
  const [imageForm, setImgForm] = useState('https://res.cloudinary.com/dhehnqygp/image/upload/v1612474875/user_d5ltrx.png')
  const [isValid, setIsValid] = useState(true)

  const { register } = useUser()

  useEffect(() => {
    handleDisable()
    console.log(isValid)
    console.log(profileImage)
  }, [name, email, password, profileImage])

  const handleImgChange = (e) => {
    setProfileImg(e.target.files[0])

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgForm(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    console.log(imageForm)
  }

  const handleDisable = () => {
    if ((name.length > 2 && email.length > 8 && password.length > 8) && profileImage) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    data.append('perfil', profileImage)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    const res = await register(data, config)
    console.log(res)
  }

  return (
        <>
            <Navigation />
            <Form onSubmit={handleSubmit}>
                <H1>Registrate con la foto que mas te guste</H1>
                <ImageCnt>
                    <Image src={imageForm} alt=""/>
                </ImageCnt>
                <Input type="file" name='perfil' id="input" style={{ display: 'none' }}
                onChange={handleImgChange} />
                <Label htmlFor="input" >Elige una imagen</Label>
                <Input type="text" name='name' onChange={(e) => setName(e.target.value)}
                 placeholder="Name... Mas de 2 caracteres" />
                <Input type="email" name='email' onChange={(e) => setEmail(e.target.value)}
                 placeholder="Email... Mas de 8 caracteres" />
                <Input type="password" name='password' onChange={(e) => setPassword(e.target.value)}
                 placeholder="Password... Mas de 8 caracteres" />
                <Button disabled={isValid}>Registrarme</Button>
            </Form>
        </>
  )
}

export default withTransition(Register)
