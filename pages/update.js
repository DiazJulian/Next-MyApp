import React, { useEffect } from 'react'
import Form from '../components/Posts/Form'
import Navigation from '../components/Navigation'
import { redirectIfNotAuth } from '../services/user'

export default function Update () {
  useEffect(() => {
    redirectIfNotAuth()
  }, [])

  return (
    <>
      <Navigation />
      <Form />
    </>
  )
}
