<template>
  <div class="media-player-container">
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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import { useQuasar } from 'quasar'
import { useMediaPlayerStore } from 'src/stores/mediaPlayer'

// Initialize Quasar and store
const $q = useQuasar()
const mediaPlayerStore = useMediaPlayerStore()

// Refs for DOM elements
const videoPlayer = ref(null)
const playerContainer = ref(null)
const player = ref(null)

// Drawer state (injected from parent)
const isDrawerOpen = inject('isDrawerOpen', ref(false))
const toggleDrawer = inject('toggleDrawer', () => {})
const closeDrawerIfOutside = (event) => {
  if (!event.target.closest('.invisible-trigger') && isDrawerOpen.value) {
    isDrawerOpen.value = false
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

// Methods for external control
const toggleFullscreen = () => {
  if ($q.fullscreen.isActive) {
    $q.fullscreen.exit()
  } else {
    $q.fullscreen.request(playerContainer.value)
  }
}

// Expose methods for parent components
defineExpose({
  toggleFullscreen
})
</script>

<style lang="scss" scoped>
.media-player-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $dark;
}

.player-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100%;
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

// Responsive adjustments
@media (max-width: 600px) {
  .video-container {
    min-height: 200px;
  }
  
  .invisible-trigger {
    width: 8%; // Wider touch area for mobile
  }
}
</style>
