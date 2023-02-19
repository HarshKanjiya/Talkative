import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatFooter, ChatHeader, ChatMessages, ChatWrapper, NoChatSelected_wrapper, Wrapper } from './chatzone.styles'
import Logo from "../../../assets/talkative_logo_small.png"
import { AnimatePresence } from 'framer-motion'
import Message from '../../components/Message'
import { getChatThunk, sendMsgThunk } from '../../../redux/thunk/chatThunk'
import { clearMsgSentNative } from '../../../redux/slices/nativeSlice'
import { socket } from '../../../App'


const ChatZone = () => {
  const dispatch = useDispatch()
  const { theme, currentChat, messageSent, activeUsers } = useSelector(state => state.native)
  const { userData } = useSelector(state => state.user)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('offline')
  const chatEndRef = useRef(null)

  useEffect(() => {
    socket.on("needToUpdate", (data) => {
      let currentFriend = currentChat.chat.members.filter(id => id !== userData._id)[0]
      if (currentFriend === data.senderID) {
        dispatch(getChatThunk({ friendID: data.senderID, name: data.name }))
      }
    })
  }, [])

  useEffect(() => {
    if (messageSent) {
      setInput('')
      var friendID = currentChat.chat.members.filter((id) => id !== userData._id)[0]
      socket.emit("newMsg", { friendID: friendID, senderID: userData._id, name: userData.name })
      dispatch(clearMsgSentNative())
    }
  }, [messageSent])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ transition: "smooth" });
  }, [currentChat])


  const HelperKeyUp = (e) => {
    if (e.code !== "Enter") return
    dispatch(sendMsgThunk({ message: input, chatID: currentChat.chat._id }))
  }
  const HelperKeyPress = () => {
    if (input.trim() !== "") dispatch(sendMsgThunk({ message: input, chatID: currentChat.chat._id }))
  }

  useEffect(() => {
    if (currentChat) {
      var members = currentChat.chat.members
      activeUsers.map((user) => {
        if (user._id === userData._id) return
        if (user._id === members[0] || user._id === members[1]) {
          setStatus("online");
        } else {
          setStatus("offline")
        }
      })
    }
  }, [activeUsers, currentChat])

  return (
    <Wrapper theme={theme} >
      <AnimatePresence>
        {
          !currentChat ?
            (
              <NoChatSelected_wrapper>
                <img src={Logo} alt="Logo" />
                <p>select a chat to start Communication</p>
              </NoChatSelected_wrapper>
            )
            :
            (
              <ChatWrapper>
                <ChatHeader theme={theme}>
                  <div className="ChatZone-Header-username">{currentChat && currentChat.name}</div>
                  <div className="ChatZone-Header-useremail">{status}</div>
                </ChatHeader>

                <ChatMessages theme={theme} >
                  {
                    currentChat.chat.chat.map((data, index) =>
                      <Message
                        data={data}
                        userId={userData && userData._id}
                        theme={theme}
                        key={index}
                      />
                    )
                  }
                  <div ref={chatEndRef} />
                </ChatMessages>

                <ChatFooter theme={theme}>
                  <input placeholder="type your message" value={input} onChange={(e) => { setInput(e.target.value) }} onKeyUp={(e) => { HelperKeyUp(e) }} />
                  <button onClick={HelperKeyPress}>send</button>
                </ChatFooter>
              </ChatWrapper>
            )
        }

      </AnimatePresence>
    </Wrapper>
  )
}

export default ChatZone