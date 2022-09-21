import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { UserQuestionService, NewQuestionService, GetQuestionService, DeleteCommentService, NewCommentService } from '../services/question'

export function useQuestion () {
  const [allQuestions, setQuestions] = useState([])
  const [allComments, setAllComments] = useState([])
  const [questionComments, setQuestionComments] = useState(0)
  const [userPost, setUserPost] = useState('')
  const { query } = useRouter()

  useEffect(() => {
    console.log(allComments)
    query.id && getAllComments()
  }, [query.id])

  const getUserQuestions = async (user) => {
    const res = await UserQuestionService(user)
    console.log(user)
    res && setQuestions(res)
  }

  const getQuestionComments = async (id) => {
    const res = await GetQuestionService(id)
    res && setQuestionComments(res.comments.length)
  }

  const newQuestion = async (user, question) => {
    const res = await NewQuestionService(user, question)
    res && setQuestions(allQuestions.concat(res))
  }

  const getAllComments = async () => {
    const id = query.id
    console.log(id)
    const res = await GetQuestionService(id)
    if (res) {
      console.log(res)
      setAllComments(res.comments)
      setUserPost(res.question.user)
    }
  }

  const newComment = async (postId, user, profileImage, comment) => {
    const res = await NewCommentService(postId, user, profileImage, comment)
    if (res) getAllComments()
  }

  const deleteComment = async (id) => {
    const res = await DeleteCommentService(id)
    if (res) {
      getAllComments()
    }
  }

  return {
    allQuestions,
    allComments,
    questionComments,
    userPost,
    getUserQuestions,
    getQuestionComments,
    newQuestion,
    getAllComments,
    newComment,
    deleteComment
  }
}
