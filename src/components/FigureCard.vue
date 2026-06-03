<template>
  <ion-card @click="$emit('irParaDetalhe',evento.id)">

    <!-- clique no card -->
    <ion-card-header>
      <ion-card-title>{{ evento.titulo }}</ion-card-title>
      <ion-card-subtitle>{{ evento.data }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>

      <!-- botão favorito -->
      <ion-button
        fill="clear"
        color="light"
        @click.stop="$emit('Favoritar', evento.id)"
      >
        <ion-icon
        :icon="star"
        :color="evento.favorito === 'yes' ? 'warning' : ''"
        />
      </ion-button>

    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/vue'
import {star} from "ionicons/icons";

defineProps<{
  evento: {
    id: number
    titulo: string
    data: string
    favorito: 'yes' | 'no'
  }
}>()

defineEmits(['Favoritar','irParaDetalhe'])
</script>