<template>
    <div>
    <a v-if="props.floating" :href="'/stories/edit/' + props.story._id" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>
    <a v-if="!props.floating" :href="'/stories/edit/' + props.story._id"><i class="fas fa-edit"></i></a>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps(['story', 'floating']);

</script>

<style scoped>
.fa-small {
    font-size: 16px !important;
}
</style>