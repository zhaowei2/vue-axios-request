// 登录的所有请求方法，应该放在此目录下统一管理

import { post } from '@/utils/request'
const requestBodyHeader = {
  "strPlatform": "web",
  "strVersion": "",
  "strEquipmentNo": ""
}
// 示例
export const login = (data) => {
    return post('admin/systemAdminUser/loginpwd', {
        header: requestBodyHeader,
        body: {
            "strMobile": data.userName,
            "strPwd": data.password
        }
    })
}