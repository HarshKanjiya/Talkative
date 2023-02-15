import { CircularProgress } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RequestComponent from '../../components/Request List/RequestComponent'
import ScreenHeader from '../../components/ScreenHeader'
import { LoadingWrapper, ResultWrapper, Wrapper } from '../search friend/newfriend.styles'
// import { Wrapper } from './requests.styles'

const Requests = () => {
  const dispatch = useDispatch()
  const { theme, searchResults, nativeLoading, nativeError } = useSelector(state => state.native)
  const { userData, error, loading } = useSelector(state => state.user)

  return (
    <Wrapper theme={theme}>
      <ScreenHeader screen="Requests" theme={theme} />
      {
        loading ? (
          <LoadingWrapper
            key="loadingScreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CircularProgress sx={{ color: theme === "light" ? "#252525" : "#f5f5f5" }} />
          </LoadingWrapper>
        ) :
          (
            <ResultWrapper
              key="resultScreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {
                userData && userData.requests &&
                userData.requests.map((user, index) => {

                  return (
                    <RequestComponent user={user} key={index} index={index} />
                  )
                })
              }
            </ResultWrapper>
          )
      }
    </Wrapper>
  )
}

export default Requests