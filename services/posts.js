import {URL} from '../config'
import axios from 'axios'

export const getPosts = async () => {
  const res = await axios.get(`${URL}/post/posts`)
  const posts = res.data
  return posts
}