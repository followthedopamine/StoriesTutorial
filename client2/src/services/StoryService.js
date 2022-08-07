import axios from 'axios'

//const userStoriesUrl = '/api/userStories/'
//const publicStoriesUrl = '/api/publicStories/'

class StoryService {
    static getUserStories() {
        return new Promise((resolve, reject) => {
            try {
                axios.get('/api/userStories/').then((res) => {
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
    static getPublicUserStories(id) {
        return new Promise((resolve, reject) => {
            try {
                axios.get('/api/publicUserStories/' + id).then((res) => {
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
    static getPublicStories() {
        return new Promise((resolve, reject) => {
            try {
                axios.get('/api/stories/').then((res) => {
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

    static getStoryById(id) {
        return new Promise((resolve, reject) => {
            try {
                axios.get('/api/stories/' + id).then((res) => {
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

export default StoryService