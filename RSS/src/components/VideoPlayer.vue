<script setup>
import {ref, onMounted} from 'vue'
import {onSlideEnter, onSlideLeave, useIsSlideActive} from '@slidev/client'

const props = defineProps({
  autoPlay: {type: String, default: "false"},
  src: {type: String, default: 'test'}
})
const emit = defineEmits(['next'])
const videoPlayer = ref(null)
const isSlideActive = useIsSlideActive()

onSlideEnter(() => {
  if (props.autoPlay === "true" && videoPlayer.value) {
    videoPlayer.value.currentTime = 0
    videoPlayer.value.play()
  }
})
onSlideLeave(() => {
  if (videoPlayer.value) videoPlayer.value.pause()
})

const nextSlide = () => {
  if (!isSlideActive.value) return
  emit('next')
}
</script>

<template>
  <video ref="videoPlayer" @ended="nextSlide">
    <source v-if="src" :src type="video/mp4" class="w-full">
  </video>
</template>

<style scoped>

</style>