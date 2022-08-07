<template>
    <div v-if="story">
        <div class="row">
            <div class="col s12 m8">
                <h3>{{story.title}}
                    <small><EditStoryIconComponent :story="story" :floating="false"></EditStoryIconComponent></small>
                </h3>
                <div class="card story">
                    <div class="card-content">
                        <span class="card-title">{{moment(story.createdAt).format('MMMM Do YYYY, h:mm:ss a')}}</span>
                        {{story.body}}
                    </div>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card center-align">
                    <div class="card-content">
                        <span class="card-title">{{story.user.displayName}}</span>
                        <img :src="story.user.image" alt="" class="circle responsive-img img-small">
                    </div>
                    <div class="card-action">
                        <a :href="'/stories/user/' + story.user._id">More from {{story.user.displayName}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import StoryService from '../../services/StoryService.js';
import EditStoryIconComponent from './EditStoryIconComponent.vue';

const props = defineProps(['id'])
const story = ref()
const moment = require('moment')

onMounted(async () => {
    try {
        story.value = await StoryService.getStoryById(props.id)
    } catch (err) {
        this.error = err.message
    }
})
</script>

<style scoped>
.img-small {
    width:80px;
}
</style>