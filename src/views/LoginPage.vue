<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <h1>Login</h1>

        <ion-item>
          <ion-label position="stacked">Email</ion-label>

          <ion-input
            v-model="email"
            type="email"
            placeholder="Digite seu email"
          />
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Senha</ion-label>

          <ion-input
            v-model="senha"
            type="password"
            placeholder="Digite sua senha"
          />
        </ion-item>

        <ion-button
          expand="block"
          class="ion-margin-top"
          @click="loginHandler"
        >
          Entrar
        </ion-button>
        <ion-alert
        :is-open="isAlertOpen"
        :header="mensagem"
        :buttons="['OK']"
        @didDismiss="isAlertOpen = false"
        />
        <p class="cadastro">
          Não possui conta?
          <router-link to="/cadastro">
            Cadastrar
          </router-link>
        </p>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useLogin } from '@/composables/useLogin'
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  useIonRouter,
  IonAlert
} from '@ionic/vue'


const router = useIonRouter()

const {
  email,
  senha,
  fazerLogin,
  Logado,
  mensagem,
  isAlertOpen
} = useLogin()

function loginHandler() {

  fazerLogin()

  if (Logado.value) {
    setTimeout(() => {
      router.push('/tabs/home')
    }, 1000)
  }
}

</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 80px auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.cadastro {
  text-align: center;
  margin-top: 20px;
}

.status {
  text-align: center;
  margin-top: 20px;
}
</style>