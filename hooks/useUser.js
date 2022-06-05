import { useEffect, useState } from 'react'
import { getSession, LoginService, RegisterService } from '../services/user'
import Router from 'next/router'

export function useUser() {

  const [session, setSession] = useState(false)
  const [name, setName] = useState('')
  const [profileImage, setProfileImg] = useState('')
  
  useEffect(() => { 
    const resUser = async () => {
      const res = await getSession()
      // console.log(res);
      if(res) {
        setSession(true)
        setName(res.name)
        setProfileImg(res.profileImage)
      }
    }
    resUser()
    // console.log(session, name, profileImage);
  }, [session])

  const login = async (email,password) => {
    const res = await LoginService(email,password)
    console.log(res);
    if(res.data){
      window.localStorage.setItem('gamdecs', res.data)
      Router.push('/')
    }
  }

  const register = async (data,config) => {
    const res = await RegisterService(data,config)
    console.log(res);
    if(res.data){
      console.log(res.data);
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