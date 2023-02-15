import { useDispatch, useSelector } from "react-redux"
import { ChangeTheme } from '../../../redux/slices/nativeSlice';
import { Body, Header, IconWrapper, OnlineFriendsWrapper, TextInput, Wrapper } from './MidBar.styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AnimatePresence, motion } from "framer-motion"
import FriendsList from "../Friends List/FriendsList";

const MidBar = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.native)
  const { userData } = useSelector(state => state.user)

  const HelperBgRipple = (event) => {
    dispatch(ChangeTheme())
  }

  return (
    <Wrapper >
      {/* // * header done */}
      <Header theme={theme}>
        <h2>talkative</h2>
        <div>
          <abbr title={`${theme} mode Activated`} className="modeAbbr" >
            <AnimatePresence mode="wait" >
              {
                theme === "light" ?
                  (
                    <IconWrapper
                      key='DarkModeIcon'
                      initial={{ scale: 1.4, opacity: 0, rotate: 90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 1.4, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      onClick={(event) => { HelperBgRipple(event) }}>
                      <DarkModeIcon />
                    </IconWrapper>
                  ) :
                  (
                    <IconWrapper
                      key='LightModeIcon'
                      initial={{ scale: 0, opacity: 0, rotate: -90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      onClick={(event) => { HelperBgRipple(event) }}>
                      <LightModeIcon />
                    </IconWrapper>
                  )
              }
            </AnimatePresence>
          </abbr>
        </div>
      </Header>
      {/* // * body */}
      <Body theme={theme}>

        {/* //* online friends */}
        <OnlineFriendsWrapper>
          <p className="MidBar-OnlineFriendsWrapper-onlines-header">chats</p>

          <TextInput
            placeholder="Search for friend"
            theme={theme}
          />

          {
            userData && (<FriendsList friendList={userData.friends} />)
          }

        </OnlineFriendsWrapper>
      </Body>
    </Wrapper>
  )
}

export default MidBar