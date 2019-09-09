import axios from 'axios'

const service = axios.create({
  // 请求地址，不需要代理转发，后端开启跨域即可
  baseURL: 'http://dev.doujishipin.com:13301/',
  // baseURL: 'http://t.doujishipin.com:13301/',
  timeout: 15000, // request timeout
  withCredentials: true
})
// axios.defaults.baseURL = 'http://dev.doujishipin.com:13301/'
// axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-type'] =  'application/x-www-form-urlencoded;charset=UTF-8';

service.interceptors.request.use(
  config=>{
    console.log(config)
    return config
  },
  error=>{
    Promise.reject(error)
  }
)
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {   
  return new Promise((resolve, reject) => {         
    service.post(url, params)        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
  });
}