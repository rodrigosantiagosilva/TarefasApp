<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="center">
          ÁLBUM DE FIGURINHAS
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="grid">
        <CardFigurinha
          v-for="figurinha in figurinhas"
          :key="figurinha.id"
          :figurinha ="figurinha"
          @irDetalhe="irParaDetalhe"
        />

      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue'

import CardFigurinha from '@/components/FigureCard.vue'
import { useAlbum } from '@/composables/useAlbum'

const {
  figurinhas,
  irParaDetalhe
} = useAlbum()
</script>

<style scoped>
.center {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 12px;
}
</style>