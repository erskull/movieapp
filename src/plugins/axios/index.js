import axios from "axios"

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:"386a231dcbaf190d09142d84a5bf8fe5"
    }
})