import axios from 'axios'

const url = 'api/login/'

class LoginService {
    static getLoginPage() {
        return new Promise((resolve, reject) => {
            try {
                axios.get(url).then((res) => {
                    const data = res.data
                    resolve(
                        data
                    )
                })
            } catch (err) {
                reject(err)
            }
        }) 
    }
}

export default LoginService