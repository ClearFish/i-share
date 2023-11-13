import axios from 'axios';
import { ElMessage, ElMessageBox } from "element-plus"
import store from "../store"
// 创建 axios 实例
const service = axios.create({
    baseURL: '/', // api 的基础 url
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 例如添加请求头，身份验证等
        const token = localStorage.getItem("access_token");
        config.headers['Authorization'] = `Basic ${token}`;
        const urls = ['/auth/oauth2/token'];
        const inUrl = urls.some((url) => config.url?.includes(url))
        if (inUrl) {
            // config.headers['Proxy-Authorization'] = 'Basic TXV6V25jZVgyQks5QktiSEtuU05ZYjNhOmNyWEN0V0Y0QVI3cnEzVGR1OGg4ZWVzeQ=='
            Object.assign(config.headers, {
                "Authorization": localStorage.getItem('access_token') || 'Basic YXBwOmFwcA==',
            })
        }
        config.headers['Accept'] = `*/*`;
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
let message
// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        // 例如数据解析，统一处理等
        return response;
    },
    error => {
        // 对响应错误做点什么
        // 例如统一处理错误，给用户反馈等
        switch (error.response.status) {
            case 500:
                ElMessage({
                    message: '服务器错误',
                    type: "error"
                })
                break;
            case 401:
                message = ElMessageBox.confirm("登录状态已过期，请重新登录！", "系统提示", {
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取 消",
                    type: "warning"
                }).then(() => {
                    store.dispatch("LogOut").then(() => {
                        location.href = "/index"
                    })
                })
                break;
            default:
                break;
        }
        return Promise.reject(error);
    }
);

export default service;