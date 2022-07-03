import { useEffect, useState } from 'react'
import { getSession, LoginService, RegisterService } from '../services/user'
import Router from 'next/router'
import { useAlert } from './useAlert'

export function useUser () {
  const [session, setSession] = useState(false)
  const [name, setName] = useState('')
  const [profileImage, setProfileImg] = useState('')
  const { LoginAlert, RegisterAlert } = useAlert()

  useEffect(() => {
    const resUser = async () => {
      const res = await getSession()
      if (res) {
        setSession(true)
        setName(res.name)
        setProfileImg(res.profileImage)
      }
    }
    resUser()
  }, [session])

  const login = async (email, password) => {
    const res = await LoginService(email, password)
    LoginAlert(res)
    if (res.data) {
      window.localStorage.setItem('gamdecs', res.data)
      Router.push('/')
    }
  }

  const register = async (data, config) => {
    const res = await RegisterService(data, config)
    RegisterAlert(res)
    if (res.data) {
      Router.push('/login')
    }
  }

  return {
    login,
    register,
    session,
    name,
    profileImage
  }
}
