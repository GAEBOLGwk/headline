import axios from 'axios'

const request = new axios.create(
    {
        baseURL: 'http://ttapi.research.itcast.cn/'
    }
)



export default request