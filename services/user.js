import axios from 'axios'
import Router from 'next/router'
const URL = process.env.NEXT_PUBLIC_URL

export const LoginService = async (email, password) => {
  try {
    const res = await axios.post(`${URL}/user/login`, { email, password })
    return res
  } catch (error) {
    if (error.response.status === 400) return 'Usuario incorrecto'
    if (error.response.status === 401) return 'Contraseña incorrecta'
    return 'Error desconocido. Intente de nuevo'
  }
}

export const RegisterService = async (data, config) => {
  try {
    const res = await axios.post(`${URL}/user/register`, data, config)
    return res
  } catch (error) {
    if (error.response.status === 400) return 'Nombre de usuario existente'
    if (error.response.status === 401) return 'Email existente'
    return 'Error desconocido. Intente de nuevo'
  }
}

export const getSession = async () => {
  const token = window.localStorage.getItem('gamdecs')
  let user
  if (token) {
    const res = await axios.get(`${URL}/user/auth/${token}`)
    user = res.data
    if ((res === null) || (res.data === 'invalid token' || res.data === 'JsonWebTokenError' || res.data === 'jwt expired' || res.data === 'invalid signature')) {
      window.localStorage.removeItem('gamdecs')
      user = null
      Router.push('/login')
    }
  }
  return user
}

export const logOut = () => {
  window.localStorage.removeItem('gamdecs')
  Router.push('/login')
}

export const redirectIfAuth = async () => {
  const user = await getSession()
  if (user) {
    console.log(user)
    Router.push('/users')
  }
}

export const redirectIfNotAuth = async () => {
  const user = await getSession()
  if (!user) {
    Router.push('/login')
  }
}

export const getUsers = async () => {
  const res = await axios.get(`${URL}/user/users`)
  const users = res.data
  return users
}

export const getUser = async (name) => {
  const res = await axios.get(`${URL}/user/${name}`)
  const user = res.data
  return user
}

export const newRed = async (user, red) => {
  const redes = await axios.post(`${URL}/user/newred`, { user, red })
  return redes
}

export const deleteRed = async (id) => {
  const deleted = await axios.delete(`${URL}/user/deletered/${id}`)
  return deleted
}
