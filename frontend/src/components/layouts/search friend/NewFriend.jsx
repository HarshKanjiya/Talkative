import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearNativeErrors } from '../../../redux/slices/nativeSlice'
import { searchFriendThunk } from '../../../redux/thunk/newFriendThunk'
import { PopUp } from '../../components/pop up/PopUp'

import ScreenHeader from '../../components/ScreenHeader'
import UserComponent from '../../components/search friend/userComponent'

import { LoadingWrapper, ResultWrapper, TextInput, Wrapper } from './newfriend.styles'


const NewFriend = () => {
  const dispatch = useDispatch()
  const { theme, searchResults, nativeLoading, nativeError } = useSelector(state => state.native)
  const { userData, error, loading } = useSelector(state => state.user)

  const [inputString, setInputString] = useState('')

  useEffect(() => {
    if (nativeError) {
      PopUp({ icon: "error", text: nativeError, title: "Oops!" })
      dispatch(clearNativeErrors())
    }
  }, [nativeError])

  const HelperInputEnter = (e) => {
    if (e.code !== "Enter") return
    dispatch(searchFriendThunk({ keyword: inputString }))
  }

  if (userData) {
    return (
      <Wrapper theme={theme}>
        <ScreenHeader screen="new Friend" theme={theme} />

        <TextInput
          placeholder="Search for friend's email or username"
          theme={theme}
          onKeyUp={(e) => { HelperInputEnter(e) }}
          value={inputString}
          onChange={(e) => {
            setInputString(e.target.value)
          }}
        />
        {
          nativeLoading ? (
            <LoadingWrapper
              key="loadingScreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CircularProgress sx={{ color: theme === "light" ? "#252525" : "#f5f5f5" }} />
            </LoadingWrapper>
          ) : (
            <ResultWrapper
              key="resultScreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {
                searchResults.map((user, index) => {
                  var type = "Add Friend";
                  var buttonBG = "#00c898";
                  userData.requestSent.map((obj) => {
                    if (obj.id === user._id) {
                      type = 'Sent!'
                      buttonBG = "#2AF598"
                    }
                  })
                  if (type === 'Add Friend') {
                    userData.friends.map((obj) => {
                      if (obj.id === user._id) {
                        type = 'friends';
                        buttonBG = "#52ACFF";
                      }
                    })
                  }
                  if (type === 'Add Friend') {
                    userData.blockList.map((obj) => {
                      if (obj.id === user._id) {
                        type = 'blocked!';
                        buttonBG = "#f82929";
                      }
                    })
                  }
                  return (
                    <UserComponent user={user} key={index} type={type} buttonBG={buttonBG} index={index} />
                  )
                })
              }
            </ResultWrapper>
          )
        }
      </Wrapper>
    )
  }
}

export default NewFriend