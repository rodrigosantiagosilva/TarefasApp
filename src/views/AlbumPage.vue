<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="center">
          ÁLBUM DE FIGURONAS
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-card class="grid card">
        <CardFigurinha
          v-for="figurinha in figurinhas"
          :key="figurinha.id"
          :figurinha ="figurinha"
        />
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard
} from '@ionic/vue'

import CardFigurinha from '@/components/FigureCard.vue'
import { useAlbum } from '@/composables/useAlbum'

const {
  figurinhas
} = useAlbum()
</script>

<style scoped>
.center {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 12px;
  
}

</style>