import axios from 'axios'
import Router from 'next/router'
import {URL} from '../config'

export const LoginService = async (email,password) => {
  
  try{
    const res = await axios.post(`${URL}/login`, {email,password})
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
    const res = await axios.post(`${URL}/register`,data,config)
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
  if(token){
    const res = await axios.get(`${URL}/auth`,token)
    console.log(res.data);
    console.log(res);
    if(res === null || res.data === 'invalid token' || res.data === 'JsonWebTokenError') {
      window.localStorage.removeItem('gamdecs')
      console.log('Session eliminada');
      Router.push('/login')
    }
  }
  return null
}

export const getUsers = async () => {
  const res = await axios.get(`${URL}/users`)
  console.log(res);
  const users = res.data
  return users
}

export const getUser = async (name) => {
  const res = await axios.get(`${URL}/${name}`)
  console.log(res);
  const user = res.data
  return user
}