<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="book" />
          <ion-label>Álbum</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/conquista">
          <ion-icon aria-hidden="true" :icon="document" />
          <ion-label>Conquistar Figurinha</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/perfil">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>


      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { person,document, book } from 'ionicons/icons';



</script>
