import React from 'react'
import MidBar from '../../layouts/MidBar/MidBar'
import SideBar from '../../layouts/SideBar/SideBar'
import ChatZone from "../../layouts/ChatZone/ChatZone"
import { Container } from './Home.styles'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticated, userData, error, loading } = useSelector(state => state.user)


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


            {/* //*friends bar */}
            <motion.div
                layout
                style={{ flex: 0.25 }}
            >
                <MidBar />
            </motion.div>


            {/* //*chat area bar */}
            <motion.div
                layout
                style={{ flex: 0.65 }}

            >
                <ChatZone />
            </motion.div>
        </Container>
    )
}

export default HomePage