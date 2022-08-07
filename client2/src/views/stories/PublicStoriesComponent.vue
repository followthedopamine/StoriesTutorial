<template>
    <div class="row">
        <div v-for="(story) in stories" class="col s12 m4" :key="story._id">
            <div class="card">
                <div class="card-image">
                    <EditStoryIconComponent v-if="user" v-show="story.user._id === user._id" :story="story" :floating="true"></EditStoryIconComponent>
                </div>
            <div class="card-content center-align">
                <h5>{{story.title}}</h5>
                <p>{{truncate(stripTags(story.body), 100)}}</p>
                <br />
                <div class="chip">
                    <img :src="story.user.image" alt="">
                    <a :href="'/stories/user/' + story.user._id">{{story.user.displayName}}</a>
                </div>
            </div>
            <div class="card-action center-align">
                <a :href="'/stories/' + story._id" class="btn grey">Read more</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import StoryService from '../../services/StoryService'
import EditStoryIconComponent from './EditStoryIconComponent.vue';
import ProfileService from '../../services/ProfileService';

const stories = ref()
const user = ref()

onMounted(async () => {
    try {
        stories.value = await StoryService.getPublicStories()
    } catch (err) {
        this.error = err.message
    }
    try {
        user.value = await ProfileService.getProfileData()
    } catch (err) {
        this.error = err.message
    }
})

function truncate(str, len) {
    if(str.length > len && str.length > 0) {
        let newStr = str + ' '
        newStr = str.substr(0, len)
        newStr = str.substr(0, newStr.lastIndexOf(' '))
        newStr = newStr.length > 0 ? newStr : str.substr(0, len)
        return newStr + '...'
    }
    return str
}

function stripTags(input) {
    return input.replace(/<(?:.|\n)*?>/gm)
}

</script>