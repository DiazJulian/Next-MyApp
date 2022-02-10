import { LoginService, RegisterService } from '../services/user'
import Router from 'next/router'

export function useUser() {

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

  const logout = () => {
    window.localStorage.removeItem('gamdecs')
    Router.push('/login')
  }

  return {
    login,
    register,
    logout
  }
}  