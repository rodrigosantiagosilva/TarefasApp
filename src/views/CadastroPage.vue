<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <h1>Cadastro</h1>

        <ion-item>
          <ion-label position="stacked">Nome</ion-label>

          <ion-input
            v-model="nome"
            placeholder="Digite seu nome"
          />
        </ion-item>

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
          @click="cadastroHandler"
        >
          Cadastrar
        </ion-button>

        <p class="login">
          Já possui conta?
          <router-link to="/">
            Entrar
          </router-link>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue'

import { useCadastro } from '../composables/usuario/useCadastro'
import { useLogin } from '../composables/usuario/useLogin'

function cadastroHandler() {

  cadastrar()
  
  if (Logado.value) {
    router.push('/tabs/home')
  }
}
const {
  nome,
  email,
  senha,
  cadastrar
} = useCadastro()
const {
  Logado
} = useLogin()
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

.login {
  text-align: center;
  margin-top: 20px;
}
</style>