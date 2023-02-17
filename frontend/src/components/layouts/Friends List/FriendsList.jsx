import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { socket } from '../../../App'
import FriendsComponent from '../../components/Friends list Home page/FriendsComponent'



// * this component is for showing friends list at chat page 
//* works like wrapper 

const FriendsList = ({ friendList }) => {
    const { theme } = useSelector(state => state.native)
    const { userData } = useSelector(state => state.user)

    const [users, setUsers] = useState([])

    useEffect(() => {
        if (userData) {
            socket.emit('addUser', userData)
            socket.on("getActiveUsers", (activeUsers) => {
                setUsers(activeUsers)
                console.log('hi Harxh!!!', users);
            })
        }
    }, [])
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