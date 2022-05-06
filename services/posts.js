import { URL } from '../config'
import axios from 'axios'
import Router from 'next/router'

export const getPosts = async () => {
  const res = await axios.get(`${URL}/post/posts`)
  const posts = res.data
  return posts
}

export const getPost = async (id) => {
  const res = await axios.get(`${URL}/post/${id}`)
  const post = res.data
  return post
}

export const getUserPost = async (user) => {
  const res = await axios.get(`${URL}/post/p/${user}`)
  const posts = res.data
  return posts
}

export const newPostService = async (user,profileImage,description,) => {
  const res = await axios.post(`${URL}/post/upload/`,{user,profileImage,description})
  return res.data
}

export const deletePostService = async (id) => {
  const res = await axios.delete(`${URL}/post/${id}`)
  Router.push('/')
  return res
}