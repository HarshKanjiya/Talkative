import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import FriendsComponent from '../../components/Friends list Home page/FriendsComponent'



// * this component is for showing friends list at chat page 
//* works like wrapper 

const FriendsList = ({ friendList }) => {
    const { theme } = useSelector(state => state.native)
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