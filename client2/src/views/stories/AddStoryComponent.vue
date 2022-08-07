<template>
    <div>
        <h3>Add Story</h3>
        <div class="row">
            <form :action="url + '/api/stories/add'" method="POST" class="col s12">
                <div class="row">
                    <div class="input-field">
                        <input type="text" id="title" name="title">
                        <label for="title">Title</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field">
                        <select id="status" name="status">
                            <option value="public" selected>Public</option>
                            <option value="private">Private</option>
                        </select>
                        <label for="status">Status</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field">
                        <h5>Tell Us Your Story:</h5>
                        <textarea id="body" name="body"></textarea>
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
    import {ref, onMounted} from 'vue'
    const M = require('materialize-css')
    const url = ref('')
    url.value = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
    onMounted(() => {
        M.FormSelect.init(document.querySelector('#status'))
    })
</script>