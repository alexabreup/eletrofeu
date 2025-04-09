<template>
  <div class="media-player-with-drawer">
    <!-- Player de Vídeo com Área Invisível -->
    <div class="player-wrapper" @click="closeDrawerIfOutside">
      <div class="video-container" ref="playerContainer">
        <video
          ref="videoPlayer"
          class="video-js vjs-big-play-centered"
          controls
          preload="auto"
          width="100%"
          height="auto"
          :poster="mediaPlayerStore.currentMedia.poster"
          data-setup="{}"
        >
          <source 
            :src="mediaPlayerStore.currentMedia.sources[0].src" 
            :type="mediaPlayerStore.currentMedia.sources[0].type" 
          />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that supports HTML5 video
          </p>
        </video>
        
        <!-- Área Invisível (5% da direita) -->
        <div 
          class="invisible-trigger"
          @click.stop="toggleDrawer"
          @touchstart.stop="toggleDrawer"
          title="Clique para abrir o menu lateral"
        />
      </div>
    </div>

    <!-- Drawer (20% da tela) -->
    <q-drawer
      v-model="isDrawerOpen"
      side="right"
      :width="drawerWidth"
      bordered
      behavior="mobile"
      class="custom-drawer"
    >
      <div class="drawer-header">
        <q-toolbar class="bg-primary text-white">
          <q-toolbar-title>
            Eletroféu Player
          </q-toolbar-title>
          <q-btn 
            icon="close" 
            flat 
            dense 
            @click="isDrawerOpen = false"
          />
        </q-toolbar>
      </div>
      
      <!-- Conteúdo do Drawer -->
      <div class="q-pa-md">
        <q-list>
          <q-item-label header>Playlist</q-item-label>
          
          <q-item 
            v-for="(media, index) in mediaPlayerStore.playlist" 
            :key="index" 
            clickable 
            :active="mediaPlayerStore.currentMediaIndex === index"
            active-class="bg-primary text-white"
            @click="playVideoFromPlaylist(index)"
          >
            <q-item-section avatar>
              <q-avatar rounded>
                <img :src="media.thumbnail || media.poster" />
              </q-avatar>
            </q-item-section>
            
            <q-item-section>
              <q-item-label>{{ media.label }}</q-item-label>
              <q-item-label caption>{{ media.duration || 'Duração desconhecida' }}</q-item-label>
            </q-item-section>
            
            <q-item-section side>
              <q-icon name="play_arrow" color="primary" v-if="mediaPlayerStore.currentMediaIndex === index" />
            </q-item-section>
          </q-item>
          
          <q-separator class="q-my-md" />
          
          <q-item-label header>Configurações</q-item-label>
          
          <q-item clickable v-ripple @click="toggleMute">
            <q-item-section avatar>
              <q-icon :name="mediaPlayerStore.isMuted ? 'volume_off' : 'volume_up'" />
            </q-item-section>
            <q-item-section>
              {{ mediaPlayerStore.isMuted ? 'Ativar Som' : 'Silenciar' }}
            </q-item-section>
          </q-item>
          
          <q-item clickable v-ripple @click="toggleFullscreen">
            <q-item-section avatar>
              <q-icon name="fullscreen" />
            </q-item-section>
            <q-item-section>
              Tela Cheia
            </q-item-section>
          </q-item>
          
          <q-item clickable v-ripple @click="toggleLoop">
            <q-item-section avatar>
              <q-icon :name="mediaPlayerStore.loopMode ? 'loop' : 'repeat'" />
            </q-item-section>
            <q-item-section>Loop</q-item-section>
            <q-item-section side>
              <q-toggle v-model="loopActive" @update:model-value="toggleLoop" />
            </q-item-section>
          </q-item>
        </q-list>
        
        <div class="text-caption q-mt-xl text-center">
          Eletrofeu Player - Departamento de Hardware - Alexandre Abreu - Versão 2.0
        </div>
      </div>
    </q-drawer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'
import { useMediaPlayerStore } from 'src/stores/mediaPlayer'

// Initialize Quasar and store
const $q = useQuasar()
const mediaPlayerStore = useMediaPlayerStore()

// Refs for DOM elements
const videoPlayer = ref(null)
const playerContainer = ref(null)
const player = ref(null)
const isDrawerOpen = ref(false)
const loopActive = ref(mediaPlayerStore.loopMode)

// Largura do drawer (20% da tela)
const drawerWidth = computed(() => {
  return Math.round($q.screen.width * 0.2)
})

// Métodos
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

const closeDrawerIfOutside = (event) => {
  if (!event.target.closest('.custom-drawer') && !event.target.closest('.invisible-trigger') && isDrawerOpen.value) {
    isDrawerOpen.value = false
  }
}

const playVideoFromPlaylist = (index) => {
  mediaPlayerStore.playVideoByIndex(index)
}

const toggleMute = () => {
  mediaPlayerStore.toggleMute()
}

const toggleLoop = () => {
  mediaPlayerStore.setLoopMode(loopActive.value)
}

const toggleFullscreen = () => {
  if ($q.fullscreen.isActive) {
    $q.fullscreen.exit()
  } else {
    $q.fullscreen.request(playerContainer.value)
  }
}

// Lifecycle hooks
onMounted(() => {
  // Initialize the video player
  if (videoPlayer.value) {
    // Import videojs dynamically to avoid SSR issues
    import('boot/videojs').then(({ videojs }) => {
      const options = {
        controls: true,
        autoplay: false,
        preload: 'auto',
        fluid: true,
        responsive: true,
        playbackRates: [0.5, 1, 1.5, 2]
      }
      
      player.value = videojs(videoPlayer.value, options)
      
      // Set player in store
      mediaPlayerStore.setPlayer(player.value)
      
      // Set up event listeners
      player.value.on('ended', mediaPlayerStore.onMediaEnded)
      player.value.on('play', () => {
        try {
          mediaPlayerStore.isPlaying = true
        } catch (error) {
          console.error('Error on play event:', error)
        }
      })
      player.value.on('pause', () => {
        try {
          mediaPlayerStore.isPlaying = false
        } catch (error) {
          console.error('Error on pause event:', error)
        }
      })
    }).catch(error => {
      console.error('Failed to load videojs:', error)
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Failed to initialize video player',
        icon: 'error'
      })
    })
  }
})

onBeforeUnmount(() => {
  if (player.value) {
    // Clean up event listeners
    player.value.off('ended', mediaPlayerStore.onMediaEnded)
    // Dispose of the player to prevent memory leaks
    player.value.dispose()
  }
})

// Expose methods for parent components
defineExpose({
  toggleDrawer,
  playVideoFromPlaylist,
  toggleMute,
  toggleFullscreen
})
</script>

<style lang="scss" scoped>
/* Container principal */
.media-player-with-drawer {
  position: relative;
  width: 100%;
  height: 100%;
}

.player-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-container {
  position: relative;
  width: 100%;
  min-height: 300px;
}

/* Área invisível (5% da direita) */
.invisible-trigger {
  position: absolute;
  top: 0;
  right: 0;
  width: 5%;
  height: 100%;
  z-index: 10; /* Acima do player, mas sem bloquear controles */
  cursor: pointer;
  background: rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.invisible-trigger:hover {
  background: rgba(0, 0, 0, 0.1);
}

/* Drawer personalizado */
.custom-drawer {
  background: rgba(30, 30, 30, 0.95);
  color: white;
}

.drawer-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

// Custom VideoJS theme overrides
:deep(.video-js) {
  font-family: inherit;
  
  .vjs-big-play-button {
    background-color: rgba($primary, 0.7);
    border-color: $primary;
    
    &:hover {
      background-color: $primary;
    }
  }
  
  .vjs-control-bar {
    background-color: rgba($dark, 0.7);
  }
  
  .vjs-play-progress {
    background-color: $primary;
  }
  
  .vjs-slider-bar {
    background-color: rgba($primary, 0.5);
  }
}

/* Melhoria para dispositivos móveis */
@media (max-width: 600px) {
  .invisible-trigger {
    width: 8%;
  }
  
  .video-container {
    min-height: 200px;
  }
}
</style>
