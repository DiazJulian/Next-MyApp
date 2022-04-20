import axios from 'axios'
import Router from 'next/router'
import {URL} from '../config'

export const LoginService = async (email,password) => {
  
  try{
    const res = await axios.post(`${URL}/user/login`, {email,password})
    console.log(res);
    return res

  }catch(error){
    if (error.response.status === 400) return 'Usuario incorrecto'
    if (error.response.status === 401) return 'Contraseña incorrecta'
    return 'Error desconocido. Intente de nuevo'
  }
}

export const RegisterService = async (data,config) => {

  try{
    const res = await axios.post(`${URL}/user/register`,data,config)
    console.log(res);
    return res

  }catch(error){
    if (error.response.status === 400) return 'Nombre de usuario existente'
    if (error.response.status === 401) return 'Email existente'
    return 'Error desconocido. Intente de nuevo'
  }
}

export const getSession = async () => {
  const token = window.localStorage.getItem('gamdecs')
  console.log(token);
  let user
  if(token){
    const res = await axios.get(`${URL}/user/auth/${token}`)
    console.log(res.data);
    console.log(res);
    user = res.data
    if((res === null) || (res.data === 'invalid token' || res.data === 'JsonWebTokenError' || res.data === 'jwt expired' || res.data === 'invalid signature')) {
      window.localStorage.removeItem('gamdecs')
      console.log('Session eliminada');
      user = null
      Router.push('/login')
    }
  }
  console.log(user);
  return user
}

export const logOut = () => {
  window.localStorage.removeItem('gamdecs')
  Router.push('/login')
}

export const redirectIfAuth = () => {
  const user = getSession()
  if(user) {
    Router.push('/users')
  }
}

export const redirectIfNotAuth = () => {
  const user = getSession()
  if(!user) {
    Router.push('/login')
  }
}

export const getUsers = async () => {
  const res = await axios.get(`${URL}/user/users`)
  console.log(res);
  const users = res.data
  return users
}

export const getUser = async (name) => {
  const res = await axios.get(`${URL}/user/${name}`)
  console.log(res);
  const user = res.data
  return user
}