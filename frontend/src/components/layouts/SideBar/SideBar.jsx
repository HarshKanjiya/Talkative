import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, SideBarElement, SideBarElementWrapper, Wrapper } from './SideBar.styles'
import LogoutIcon from '@mui/icons-material/Logout';



const SideBar = () => {
  const [extended, setExtended] = useState(false)
  const { theme } = useSelector(state => state.native)
  return (
    <Wrapper theme={theme} extended={extended}>
      <Container theme={theme}>
        <SideBarElementWrapper>
          <SideBarElement theme={theme} onClick={() => { setExtended(!extended) }} >
            <svg xmlns="http://www.w3.org/2000/svg" height="23" width="23" viewBox="0 0 64 64">
              <g stroke-linecap="square" stroke-width="5" fill="none" stroke="#212121" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10">
                <line x1="4" y1="32" x2="60" y2="32" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}></line>
                <line x1="32" y1="14" x2="60" y2="14" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}></line>
                <line x1="4" y1="50" x2="32" y2="50" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}></line>
              </g></svg>
          </SideBarElement>



        </SideBarElementWrapper>
        <SideBarElement theme={theme} ><LogoutIcon /></SideBarElement>
      </Container>
    </Wrapper>
  )
}

export default SideBar