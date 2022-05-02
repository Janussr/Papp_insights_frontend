import axios from "axios";

const URL = 'http://localhost:8000/report';

const apiUtils = () => {

    const getUrl = () => {
        return URL;
    }

    const getAuthAxios = () => {
        const authAxios = axios.create({
            headers: {
                'x-access-token': localStorage.getItem('jwtToken')
            }
        })
        return authAxios
    }

    return {
        getUrl,
        getAuthAxios
    }
}

export default apiUtils();