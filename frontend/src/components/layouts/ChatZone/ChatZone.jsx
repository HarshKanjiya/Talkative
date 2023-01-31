import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../../config'
import LoadingLayout from './../loading/LoadingLayout';

const ChatZone = () => {

  const [user, setUser] = useState(null)

  const onclickevent = () => {
    window.open(`${BACKEND_URL}/auth/google/callback`, "_self");
  }

  const logout = () => {
    window.open(`${BACKEND_URL}/auth/logout`, "_self");

  }

  const getUser = async () => {
    try {
      const url = `${BACKEND_URL}/auth/login/success`
      const { data } = await axios.get(url, { withCredentials: true });
      console.log('data :>> ', data);
      setUser(data.user)
    }
    catch (err) {
      console.log(err)
    }
  }
  // useEffect(()=>{
  //   getUser()
  // },[])

  return (
    <div>

      {
        user ?
          (<>
            user in
            <button onClick={logout} > out </button>
          </>)
          :
          (<>

            <button onClick={onclickevent} > sign in with gggggggg </button>
            <button onClick={getUser} >gettt </button>
            <LoadingLayout size='small' />
          </>)
      }

    </div>
  )
}

export default ChatZone