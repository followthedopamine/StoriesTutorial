<template>
    <div>
        <h6>Dashboard</h6>
        <h3>Welcome {{profileData.displayName}}</h3>
        <p>Here are your stories</p>
        <div class="fixed-action-btn">
            <a href="stories/add" class="btn-floating btn-large waves-effect waves-light red"><i class="fas fa-plus"></i></a>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(story, index) in storyData" :key="story._id" :index="index">
                    <td><a :href="'/stories/' + story._id">{{story.title}}</a></td>
                    <td>{{moment(story.createdAt).format('MMMM Do YYYY, h:mm:ss a')}}</td>
                    <td><span class="dash-status">{{story.status}}</span></td>
                    <td>
                        <a :href="'/stories/edit/' + story._id" class="btn btn-float"><i class="fas fa-edit"></i></a>
                        <form :action="'/api/stories/delete/' + story._id" method="POST" id="delete-form">
                            <button type="submit" class="btn red"><div class="fas fa-trash"></div></button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ProfileService from '../services/ProfileService'
import StoryService from '../services/StoryService'
const moment = require('moment')

    export default {
        name: "DashboardComponent",
        data() {
            return {
                profileData: '',
                storyData: '',
                error: '',
                moment: moment,
            }
        },
        async created() {
            try {
                this.profileData = await ProfileService.getProfileData()
            } catch (err) {
                this.error = err.message
            }
            try {
                this.storyData = await StoryService.getUserStories()
            } catch (err) {
                this.error = err.message
            }
        }
    }
</script>

<style scoped> 
p {
    margin: 10px 0 !important;
}
.login-container {
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
}

.btn-float {
    float: left;
    margin-right: 10px;
}

</style>