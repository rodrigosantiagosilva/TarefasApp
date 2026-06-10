<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Limpar Dados</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>
        <ion-card-header>
          <ion-card-title>Apagar Local Storage</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Esta ação removerá todos os dados salvos no navegador.
        </ion-card-content>
      </ion-card>

      <ion-button
        expand="block"
        color="danger"
        @click="limparStorage"
      >
        Limpar Local Storage
      </ion-button>

      <ion-button
        expand="block"
        color="warning"
        @click="abrirConfirmacao = true"
      >
        Resetar Figurinhas
      </ion-button>

      <ion-alert
        :is-open="isAlertOpen"
        header="Sucesso"
        message="Todos os dados foram apagados."
        :buttons="['OK']"
        @didDismiss="isAlertOpen = false"
      />

      <ion-alert
        :is-open="abrirConfirmacao"
        header="Confirmar"
        message="Deseja realmente deixar todas as figurinhas como não coletadas?"
        :buttons="[
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Resetar',
            handler: () => {
              resetarAlbum()
            }
          }
        ]"
        @didDismiss="abrirConfirmacao = false"
      />

      <ion-alert
        :is-open="alertaAberto"
        header="Sucesso"
        :message="mensagemAlerta"
        :buttons="['OK']"
        @didDismiss="alertaAberto = false"
      />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAlbum } from '@/composables/useAlbum'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonAlert,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'

const router = useRouter()

const isAlertOpen = ref(false)
const abrirConfirmacao = ref(false)

function limparStorage() {
  localStorage.clear()
  isAlertOpen.value = true
  router.push('/')
}

const {
  resetarAlbum,
  alertaAberto,
  mensagemAlerta
} = useAlbum()
</script>