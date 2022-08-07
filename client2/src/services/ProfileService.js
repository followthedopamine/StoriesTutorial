import axios from 'axios'

const url = 'api/profile/'

class ProfileService {
    static getProfileData() {
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

export default ProfileService