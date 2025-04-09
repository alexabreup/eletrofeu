<template>
  <q-page class="drawer-player-page">
    <div class="player-container">
      <MediaPlayerWithDrawer />
    </div>
  </q-page>
</template>

<script setup>
import MediaPlayerWithDrawer from 'src/components/MediaPlayerWithDrawer.vue'
</script>

<style lang="scss" scoped>
.drawer-player-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.player-container {
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
