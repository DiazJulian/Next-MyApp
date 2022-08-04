import { useState } from 'react'
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '../hooks/useUser'
import { deleteRed, newRed } from '../services/user'
import { A, Article, CheckIcon, Container, FontAwesome, Form, Input, TrashIcon } from '../styles/components/Redes'
import Router from 'next/router'

export function Redes ({ user }) {
  const [input1, setInput1] = useState('https://')
  const [input2, setInput2] = useState('https://')
  const [input3, setInput3] = useState('https://')
  const { name } = useUser()

  const Submit1 = async (e) => {
    e.preventDefault()
    const res = await newRed(name, input1)
    res && Router.push(`/user/${name}`)
  }

  const Submit2 = async (e) => {
    e.preventDefault()
    const res = await newRed(name, input2)
    res && Router.push(`/user/${name}`)
  }

  const Submit3 = async (e) => {
    e.preventDefault()
    const res = await newRed(name, input3)
    res && Router.push(`/user/${name}`)
  }

  const dltRed = async (id) => {
    const res = await deleteRed(id)
    res && Router.push(`/user/${name}`)
  }

  return (
    <div>
      { user.redes &&
        <>
          <Container>
            <Article>
            { user.redes[0]
              ? <A key={user.redes[0]._id} href={user.redes[0].red} target='_blank' rel='noreferrer'>{user.redes[0].red}</A>
              : <>
                { (name === user.user.name) &&
                <Form onSubmit={Submit1}>
                  <Input defaultValue={input1} onChange={(e) => setInput1(e.target.value)} />
                  {(input1.length > 20) &&
                  <CheckIcon className='check-icon'>
                    <FontAwesome icon={faCheckCircle} />
                  </CheckIcon>
                  }
                </Form>
                }
                </>
            }
            </Article>
            {((name === user.user.name && user.redes[0])) &&
              <TrashIcon onClick={() => dltRed(user.redes[0]._id)}>
                <FontAwesome icon={faTrash} />
              </TrashIcon>
              }
          </Container>

          <Container>
            <Article>
            { user.redes[1]
              ? <A key={user.redes[1]._id} href={user.redes[1].red} target='_blank' rel='noreferrer'>{user.redes[1].red}</A>
              : <>
              { (name === user.user.name) &&
              <Form onSubmit={Submit2}>
                <Input defaultValue={input2} onChange={(e) => setInput2(e.target.value)} />
                {(input2.length > 20) &&
                <CheckIcon className='check-icon'>
                  <FontAwesome icon={faCheckCircle} />
                </CheckIcon>
                }
              </Form>
              }
              </>
            }
            </Article>
            {((name === user.user.name && user.redes[1])) &&
              <TrashIcon onClick={() => dltRed(user.redes[1]._id)}>
                <FontAwesome icon={faTrash} />
              </TrashIcon>
              }
          </Container>

          <Container>
            <Article>
            { user.redes[2]
              ? <A key={user.redes[2]._id} href={user.redes[2].red} target='_blank' rel='noreferrer'>{user.redes[2].red}</A>
              : <>
              { (name === user.user.name) &&
              <Form onSubmit={Submit3}>
                <Input defaultValue={input3} onChange={(e) => setInput3(e.target.value)} />
                {(input3.length > 20) &&
                <CheckIcon className='check-icon'>
                  <FontAwesome icon={faCheckCircle} />
                </CheckIcon>
                }
              </Form>
              }
              </>
            }
            </Article>
            {((name === user.user.name && user.redes[2])) &&
              <TrashIcon onClick={() => dltRed(user.redes[2]._id)}>
                <FontAwesome icon={faTrash} />
              </TrashIcon>
              }
          </Container>
        </>
      }
    </div>
  )
}
