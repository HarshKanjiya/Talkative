import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatFooter, ChatHeader, ChatMessages, ChatWrapper, NoChatSelected_wrapper, Wrapper } from './chatzone.styles'
import Logo from "../../../assets/talkative_logo_small.png"
import { AnimatePresence } from 'framer-motion'
import ScrollToBottom from 'react-scroll-to-bottom';


const ChatZone = () => {
  const dispatch = useDispatch()
  const { theme, currentChat } = useSelector(state => state.native)

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
                  <div className="ChatZone-Header-usermail">Online</div>
                </ChatHeader>

                <ChatMessages theme={theme} >
                  <ScrollToBottom
                    initialScrollBehavior='smooth' mode='bottom' >

                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                    <p>qwqwqw</p>
                  </ScrollToBottom>
                </ChatMessages>

                <ChatFooter theme={theme}>
                  <input placeholder="qwqw" />
                  <button>send</button>
                </ChatFooter>
              </ChatWrapper>
            )
        }

      </AnimatePresence>
    </Wrapper>
  )
}

export default ChatZone