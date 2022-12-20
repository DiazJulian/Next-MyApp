import { useEffect, useState } from 'react'
import { getSession, LoginService, RegisterService, RoleUser } from '../services/user'
import Router, { useRouter } from 'next/router'
import { useAlert } from './useAlert'

export function useUser () {
  const [session, setSession] = useState(false)
  const [name, setName] = useState('')
  const [profileImage, setProfileImg] = useState('')
  const [userAdmin, setUserAdmin] = useState(false)
  const { LoginAlert, RegisterAlert } = useAlert()
  const router = useRouter()
  const URL = 'https://res.cloudinary.com/dhehnqygp/image/upload/v1625190194/sq6ou90ayk95qnpa7lbt.jpg'

  useEffect(() => {
    const resUser = async () => {
      const res = await getSession()
      if (res) {
        setSession(true)
        setName(res.name)
        res.role !== 'Disable' ? setProfileImg(res.profileImage) : setProfileImg(URL)
        res.role === 'Admin' && setUserAdmin(true)
      }
    }
    resUser()
  }, [session])

  const login = async (email, password) => {
    const res = await LoginService(email, password)
    LoginAlert(res)
    if (res.data) {
      window.localStorage.setItem('gamdecs', res.data)
      router.back()
    }
  }

  const register = async (data, config) => {
    const res = await RegisterService(data, config)
    RegisterAlert(res)
    if (res.data) {
      Router.push('/login')
    }
  }

  const updateRole = async (user, role) => {
    await RoleUser(user, role)
  }

  return {
    login,
    register,
    updateRole,
    session,
    name,
    profileImage,
    userAdmin
  }
}
