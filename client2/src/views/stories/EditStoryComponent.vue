<template>
    <div v-if="story">
        <h3>Edit Story</h3>
        <div class="row">
            <form :action="url + '/api/stories/edit/' + props.id" method="POST" class="col s12">
                <div class="row">
                    <div class="input-field">
                        <input type="text" id="title" name="title" :value="story.title">
                        <label for="title">Title</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field">
                        <select id="status" name="status">
                            <option value="public" :selected="story.status === 'public'">Public</option>
                            <option value="private" :selected="story.status === 'private'">Private</option>
                        </select>
                        <label for="status">Status</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field">
                        <h5>Tell Us Your Story:</h5>
                        <textarea id="body" name="body" v-model="storyBody"></textarea>
                    </div>
                </div>

                <div class="row">
                    <input type="submit" value="Save" class="btn">
                    <a href="/dashboard" class="btn orange">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import {defineProps, ref, onBeforeMount, onUpdated} from 'vue'
    import StoryService from '../../services/StoryService'

    const props = defineProps(['id'])

    const M = require('materialize-css')
    const url = ref('')
    const story = ref()
    const storyBody = ref()

    url.value = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
    onBeforeMount(async() => {
        try {
            story.value = await StoryService.getStoryById(props.id)
            storyBody.value = story.value.body
        } catch (err) {
            this.error = err.message
        }
    })
    onUpdated(() => {
        M.FormSelect.init(document.querySelector('#status'))
    })

</script>
