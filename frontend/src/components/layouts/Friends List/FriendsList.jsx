import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../../../App'
import { setActiveUsers } from '../../../redux/slices/nativeSlice'
import FriendsComponent from '../../components/Friends list Home page/FriendsComponent'



// * this component is for showing friends list at chat page 
//* works like wrapper 

const FriendsList = ({ friendList }) => {
    const { theme } = useSelector(state => state.native)
    const { userData } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userData) {
            socket.emit('addUser', userData);
            socket.on("getActiveUsers", activeUsers => {
                dispatch(setActiveUsers(activeUsers))
            })
        }
    }, [userData])

    return (
        <Wrapper>
            <AnimatePresence mode='sync' >
                {
                    friendList.map((friend, index) =>
                        <FriendsComponent name={friend.name} id={friend.id} key={index} index={index} theme={theme} />)
                }
            </AnimatePresence>
        </Wrapper>
    )
}

export default FriendsList

const Wrapper = styled.div`
height: 100%;
overflow-y: auto;
overflow-x: hidden;
`