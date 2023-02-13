export const BACKEND_URL = "http://localhost:5050"


// * apissssssssssssssssss

export const apiHeaderConfig = {
    headers: {
        "Content-Type": "application/json",
        changeOrigin: true,
        secure: true
    },
}

// auth apis
export const logInAPI = "/api/v1/user/login"
export const googleAuthAPI = "/auth/login/success"
export const registerAPI = "/api/v1/user/register"
export const logoutAPI = "/api/v1/user/logout"
export const routineAPI = "/api/v1/user/routinecheck"


export const searchFriendAPI = "/api/v1/friend/search"


export const getChatAPI = "/api/v1/chat/getchat"