<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="center">
          Olá {{ nome }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="perfil">

        <ion-avatar class="avatar">
          <img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            alt="Avatar"
          />
        </ion-avatar>

        <h2>{{ nome }}</h2>

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
  IonContent,
  IonAvatar,
} from '@ionic/vue'

import { usePerfil } from '@/composables/usePerfil'

const {
  nome,
} = usePerfil()
</script>

<style scoped>
.center {
  text-align: center;
}

.perfil {
  text-align: center;
  padding: 20px;
}

.avatar {
  width: 120px;
  height: 120px;
  margin: 20px auto;
}
</style>