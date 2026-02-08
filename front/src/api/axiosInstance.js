import axios from "axios";
import Cookies from "js-cookie"

const axiosInstance = axios.create({
    baseURL:"https://chatingaapp-production.up.railway.app",
    headers: { "Content-Type": "application/json"}
});

    axiosInstance.interceptors.request.use((config)=>{
        const token = Cookies.get("token");
        if(token){
            config.headers.token = token;
        }
        return config;
    });


export default axiosInstance;
