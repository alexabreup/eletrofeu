<template>
  <q-page class="flex flex-center column q-pa-md">
    <div class="text-h4 q-mb-lg text-center">Eletrofeu Player</div>
    
    <q-card class="welcome-card q-ma-md" flat bordered>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Player com Drawer</div>
      </q-card-section>
      <q-card-section class="q-pt-lg">
        <p>Versão com área clicável na borda direita (5%) para abrir um drawer lateral (20%)</p>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="primary" label="Acessar Player" to="/drawer-player" class="q-mb-md" />
      </q-card-actions>
    </q-card>
    
    <div class="text-caption q-mt-xl text-center">
      Eletrofeu Player - Departamento de Hardware - Alexandre Abreu - Versão 2.0
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Automatically redirect to drawer player page
onMounted(() => {
  // Small delay to allow the page to render first
  setTimeout(() => {
    router.push('/drawer-player')
  }, 500)
})
</script>

<style lang="scss" scoped>
.welcome-card {
  width: 300px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
}

// Responsive adjustments
@media (max-width: 600px) {
  .welcome-card {
    width: 90%;
    max-width: 300px;
    margin-bottom: 16px;
  }
}
</style>
