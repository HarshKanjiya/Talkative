import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Wrapper } from './SideBar.styles'

const SideBar = () => {
  const [extended, setExtended] = useState(false)
  const { theme } = useSelector(state => state.native)
  return (
    <Wrapper theme={theme} extended={extended}>
      qw
      <button onClick={() => { setExtended(!extended) }} >click!</button>
    </Wrapper>
  )
}

export default SideBar