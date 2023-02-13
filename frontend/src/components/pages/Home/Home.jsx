import React from 'react'
import MidBar from '../../layouts/MidBar/MidBar'
import SideBar from '../../layouts/SideBar/SideBar'
import ChatZone from "../../layouts/ChatZone/ChatZone"
import { Container } from './Home.styles'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { googleAuthThunk } from '../../../redux/thunk/userThunk'
import styled from '@emotion/styled'
import NewFriend from '../../layouts/search friend/NewFriend'
import Requests from '../../layouts/Requests List/Requests'

const HomePage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticated, userData, error, loading } = useSelector(state => state.user)
    const { screen } = useSelector(state => state.native)


    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [isAuthenticated])


    return (
        <Container
            layout
            key="homePage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >

            {/* //*side bar */}
            <motion.div
                layout
            >
                <SideBar />
            </motion.div>

            <AnimatePresence mode="wait">
                {
                    screen === "chats" && (
                        <Wrapper
                            layout
                            key="chats"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* //*friends bar */}
                            <MidBar />
                            {/* //*chat area bar */}
                            <ChatZone />
                        </Wrapper>
                    )
                }
                {
                    screen === "addfriend" && (
                        <motion.div
                            key="addfriend"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ heigth: "100%", width: "100%" }}

                        >
                            <NewFriend />
                        </motion.div>
                    )
                }
                {
                    screen === "requests" && (
                        <motion.div
                            key="requests"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ heigth: "100%", width: "100%" }}

                        >
                            <Requests />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </Container>
    )
}

export default HomePage

const Wrapper = styled(motion.div)`
display: flex;
width: 100%;
gap:0.5rem;
align-items: center;
justify-content: flex-start;
`
