import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScreenHeader from '../../components/ScreenHeader'

import { TextInput, Wrapper } from './newfriend.styles'


const NewFriend = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.native)

  const [inputString, setInputString] = useState('')

  return (
    <Wrapper theme={theme}>
      <ScreenHeader screen="new Friend" theme={theme} />

      <TextInput placeholder="Search for friend's email or username" theme={theme} />

    </Wrapper>
  )
}

export default NewFriend