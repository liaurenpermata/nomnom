import axios from 'axios'

export const registerUser = async (user) => {
    const { data } = await axios({
        method: 'POST',
        url: 'https://avatar.ristek.cs.ui.ac.id/auth/register',
        data: user,
        headers:{
            Authorization: 'Bearer 62fa3c618fb162f1c247bfb0',
        }
    })
    return data;
}

export const loginUser = async (user) => {
    const { data } = await axios({
        method: 'POST',
        url: 'https://avatar.ristek.cs.ui.ac.id/auth/login',
        data: user,
        headers:{
            Authorization: 'Bearer 62fa3c618fb162f1c247bfb0'
        }
    })

    return data;
}