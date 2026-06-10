<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>
          COLETE SUAS FIGURONAS
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
  <ion-grid style="height: 100%">
    <ion-row
      style="height: 100%"
      class="ion-justify-content-center ion-align-items-center"
    >
      <ion-col size="auto">
        <ion-button @click="coletarFigurinha">
          Coletar Figurinha
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-alert
    :is-open="alertaAberto"
    header="Parabéns!"
    :message="mensagemAlerta"
    :buttons="['OK']"
    @didDismiss="alertaAberto = false"
  />
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
  IonButton,
  IonAlert,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue'

import { useAlbum } from '@/composables/useAlbum'

const {
  coletarFigurinha,
  alertaAberto,
  mensagemAlerta
} = useAlbum()
</script>