import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getSession } from '../services/user';

const Context = createContext()

export function UserContextProvider ({children}) {
  const [session, setSession] = useState(false)
  console.log(session);
  // useEffect(() => { 
  //   getSession()
  //   .then(res => {
  //     console.log(res);
  //     if(res) setSession(true)})
  // }, [session])
  return (
    <Context.Provider value={{session, setSession}} >
      {children}
    </Context.Provider>
  )
}

export const useSession = () => {
  return useContext(Context)
}

export default Context