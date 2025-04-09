<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer 
      v-model="rightDrawerOpen" 
      side="right" 
      bordered
      :width="drawerWidth"
      :breakpoint="700"
      behavior="mobile"
      class="custom-drawer"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple @click="playVideo">
            <q-item-section avatar>
              <q-icon name="play_circle" />
            </q-item-section>
            <q-item-section>Play Video</q-item-section>
          </q-item>
          
          <q-item clickable v-ripple @click="playList">
            <q-item-section avatar>
              <q-icon name="playlist_play" />
            </q-item-section>
            <q-item-section>Play List</q-item-section>
          </q-item>
          
          <q-item clickable v-ripple @click="toggleLoop">
            <q-item-section avatar>
              <q-icon :name="loopActive ? 'loop' : 'repeat'" />
            </q-item-section>
            <q-item-section>Loop</q-item-section>
            <q-item-section side>
              <q-toggle v-model="loopActive" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
      
      <!-- Botão central para abrir menu -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn 
          round 
          color="primary" 
          icon="menu" 
          @click="toggleRightDrawer"
          class="q-mb-md"
          aria-label="Abrir Menu"
        />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed, provide } from 'vue'
import { useQuasar } from 'quasar'
import { useMediaPlayerStore } from 'src/stores/mediaPlayer'

const $q = useQuasar()
const rightDrawerOpen = ref(false)
const loopActive = ref(false)
const mediaPlayerStore = useMediaPlayerStore()

// Definir a largura do drawer como 20% da tela
const drawerWidth = computed(() => {
  return Math.round($q.screen.width * 0.2)
})

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const playVideo = () => {
  mediaPlayerStore.playCurrentVideo()
  rightDrawerOpen.value = false
}

const playList = () => {
  mediaPlayerStore.playPlaylist()
  rightDrawerOpen.value = false
}

const toggleLoop = () => {
  loopActive.value = !loopActive.value
  mediaPlayerStore.setLoopMode(loopActive.value)
}

// Provide drawer state to child components
provide('isDrawerOpen', rightDrawerOpen)
provide('toggleDrawer', toggleRightDrawer)
</script>

<style lang="scss">
.q-drawer {
  transition: transform 0.3s ease;
}

.custom-drawer {
  background: rgba(30, 30, 30, 0.95);
  color: white;
}

.q-item {
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba($primary, 0.1);
  }
}
</style>
