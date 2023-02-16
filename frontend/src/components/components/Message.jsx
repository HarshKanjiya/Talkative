import styled from '@emotion/styled'
import React from 'react'
import { formateDate } from '../../utils/DateHelper';

const Message = ({ userId, theme, data }) => {
  const { senderID, time, message } = data;

  return (
    <Wrapper right={userId == senderID} >
      <Container theme={theme}>
        <p className='message-text'>{message}</p>
        <p className='message-time'>{formateDate(time)}</p>
      </Container>
    </Wrapper>
  )
}

export default Message

const Wrapper = styled.div`
margin: 0.25rem;
overflow: hidden;
display: flex;
align-items: center;
justify-content: ${props => (props.right ? "right" : "left")};
`
const Container = styled.div`
background-color: ${props => (props.theme === "light" ? "#fff" : "#252525")};
max-width: 60%;
padding: 0.4rem 0.8rem;
border-radius: 7px;
display: flex;
align-items: flex-end;
gap:0.8rem;

.message-text{
  max-width: 100%;
  word-break: break-all;
}
.message-time{
  font-size: 0.75rem;
  opacity: 0.7;
  min-width: max-content;
}
`