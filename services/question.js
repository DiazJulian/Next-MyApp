import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL

export const GetQuestionService = async (id) => {
  try {
    const res = await axios.get(`${URL}/question/qu/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Error al obtener Question')
  }
}

export const UserQuestionService = async (user) => {
  try {
    const res = await axios.get(`${URL}/question/q/${user}`)
    return res.data
  } catch (error) {
    throw new Error('Error al obtener User Question')
  }
}

export const NewQuestionService = async (user, question) => {
  try {
    const res = await axios.post(`${URL}/question/newquestion`, { user, question })
    return res.data
  } catch (error) {
    throw new Error('Error al crear Question')
  }
}

export const NewCommentService = async (postId, user, profileImage, comment) => {
  try {
    const res = await axios.post(`${URL}/question/newqcomment`, { postId, user, profileImage, comment })
    return res.data
  } catch (error) {
    throw new Error('Error al crear nuevo comentario')
  }
}

export const DeleteCommentService = async (Id) => {
  try {
    const res = await axios.delete(`${URL}/post/delcom/${Id}`)
    return res.data
  } catch (error) {
    throw new Error('Error al eliminar comentario')
  }
}
