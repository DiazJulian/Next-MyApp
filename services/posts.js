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
  return res
}

export const getUserPost = async (user) => {
  const res = await axios.get(`${URL}/post/p/${user}`)
  const posts = res.data
  return posts
}

export const newPostService = async (user,profileImage,description,) => {
  const res = await axios.post(`${URL}/post/upload/`,{user,profileImage,description})
  if(res) Router.push('/')
  return res.data
}

export const deletePostService = async (id) => {
  const res = await axios.delete(`${URL}/post/${id}`)
  Router.push('/')
  return res
}

export const LikeService = async (id) => {
  const likes = await axios.post(`${URL}/post/like/${id}`)
  return likes
}

export const FavService = async (id) => {
  const favs = await axios.post(`${URL}/post/${id}`)
  return favs
}

export const NewCommentService = async (postId,user,profileImage,comment) => {
  const res = await axios.post(`${URL}/post/comment`, {postId,user,profileImage,comment})
  console.log(res);
  return res.data
}

export const DeleteCommentService = async (Id) => {
  const res = await axios.delete(`${URL}/post/delcom/${Id}`)
  return res.data
}