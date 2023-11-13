import request from "@/utils/request"
import qs from "qs"
// export function getAuth(params) {
//     return request({
//         url: '/access/auth/oauth2/token',
//         method: 'post',
//         params
//     })
// }
export default {
    getAuth: (params) => {
        const data = qs.stringify(params)
        return request({
            url: '/auth/oauth2/token',
            method: 'post',
            data
        })
    },
    getList: () => {
        return request({
            url: '/api/admin/tenant/list',
            method: 'get',
        })
    },
}