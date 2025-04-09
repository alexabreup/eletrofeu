import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMediaPlayerStore = defineStore('mediaPlayer', () => {
  // State
  const currentMediaIndex = ref(0)
  const isPlaying = ref(false)
  const isMuted = ref(false)
  const loopMode = ref(false)
  const player = ref(null)
  
  // Playlist data
  const playlist = ref([
    {
      label: 'Big Buck Bunny',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.',
      poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
      thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
      duration: '9:56',
      sources: [
        {
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          type: 'video/mp4'
        }
      ]
    },
    {
      label: 'Elephant Dream',
      description: 'The first Blender Open Movie from 2006',
      poster: 'https://download.blender.org/ED/cover.jpg',
      thumbnail: 'https://download.blender.org/ED/cover.jpg',
      duration: '10:53',
      sources: [
        {
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          type: 'video/mp4'
        }
      ]
    },
    {
      label: 'Sintel',
      description: 'Third Open Movie by Blender Foundation',
      poster: 'https://durian.blender.org/wp-content/uploads/2010/05/sintel-1024x436.jpg',
      thumbnail: 'https://durian.blender.org/wp-content/uploads/2010/05/sintel-1024x436.jpg',
      duration: '14:48',
      sources: [
        {
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          type: 'video/mp4'
        }
      ]
    },
    {
      label: 'Tears of Steel',
      description: 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender.',
      poster: 'https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg',
      thumbnail: 'https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg',
      duration: '12:14',
      sources: [
        {
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
          type: 'video/mp4'
        }
      ]
    }
  ])

  // Computed
  const currentMedia = computed(() => {
    return playlist.value[currentMediaIndex.value]
  })

  // Actions
  function setPlayer(videoPlayer) {
    player.value = videoPlayer
  }

  function playCurrentVideo() {
    if (player.value) {
      player.value.play()
      isPlaying.value = true
    }
  }

  function pauseVideo() {
    if (player.value) {
      player.value.pause()
      isPlaying.value = false
    }
  }

  function playPlaylist() {
    playCurrentVideo()
  }

  function playVideoByIndex(index) {
    if (index >= 0 && index < playlist.value.length) {
      currentMediaIndex.value = index
      
      if (player.value) {
        player.value.src({ 
          src: currentMedia.value.sources[0].src, 
          type: currentMedia.value.sources[0].type 
        })
        player.value.poster(currentMedia.value.poster)
        player.value.load()
        player.value.play()
        isPlaying.value = true
      }
    }
  }

  function toggleMute() {
    isMuted.value = !isMuted.value
    if (player.value) {
      player.value.muted(isMuted.value)
    }
  }

  function setLoopMode(value) {
    loopMode.value = value
    if (player.value) {
      player.value.loop(value)
    }
  }

  function onMediaEnded() {
    if (loopMode.value) {
      // If loop mode is on, replay the same video
      playCurrentVideo()
    } else if (currentMediaIndex.value < playlist.value.length - 1) {
      // Play next video
      playVideoByIndex(currentMediaIndex.value + 1)
    } else {
      // Reached end of playlist, go back to first video
      playVideoByIndex(0)
    }
  }

  return {
    // State
    currentMediaIndex,
    isPlaying,
    isMuted,
    loopMode,
    playlist,
    
    // Computed
    currentMedia,
    
    // Actions
    setPlayer,
    playCurrentVideo,
    pauseVideo,
    playPlaylist,
    playVideoByIndex,
    toggleMute,
    setLoopMode,
    onMediaEnded
  }
})
