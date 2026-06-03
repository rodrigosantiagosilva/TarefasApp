<template>

  <ion-card @click="$emit('irDetalhe', figurinha.id)" class="center">
    <ion-card-title>
    {{ figurinha.id }}
      </ion-card-title>
    <ion-card-content class="moldura center"><img :src="figurinha.foto" :alt="figurinha.nome" class="imagem center" /></ion-card-content>
    <ion-card-header>
      <ion-card-title>
        {{ figurinha.nome }}
      </ion-card-title>
      <ion-card-subtitle>
        {{ figurinha.data }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-chip color="success" v-if="figurinha.coletada === 'yes'">
        Coletada
      </ion-chip>
      <ion-chip color="danger" v-else> Não coletada </ion-chip>
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
  IonChip,
} from "@ionic/vue";

defineProps<{
  figurinha: {
    id: number
    foto: string
    nome: string
    descricao: string
    data: string
    coletada: 'yes' | 'no'
  }
}>()

defineEmits(["irDetalhe"]);
</script>

<style scoped>
/* Estilização principal do Card */
ion-card {
  --background: #a6a6a6; /* Cinza de fundo idêntico ao da imagem */
  --box-shadow: none;   /* Remove sombras para ficar totalmente plano */
  border-radius: 0px;   /* Se quiser bordas retas como na imagem */
  position: relative;   /* Necessário para posicionar o número e o chip */
  height: 400px;        /* Defina uma altura fixa que faça sentido no seu layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 20px;
}

/* O ID (Número 1) no topo esquerdo */
ion-card > ion-card-title:first-child {
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 3rem;      /* Tamanho grande igual ao da imagem */
  font-weight: bold;
  color: #ffffff;
}

/* Container da imagem */
.moldura {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 15px;
}

.imagem {
  max-width: 180px;     /* Controla o tamanho do Pou */
  height: auto;
  object-fit: contain;
}

/* Bloco de textos (Nome) */
ion-card-header {
  text-align: center;
  padding: 0;
}

ion-card-header ion-card-title {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase; /* Deixa o texto em caixa alta (POU) */
  letter-spacing: 1px;
}

/* Esconde a data se você não quiser que ela apareça (já que não tem na imagem) */
ion-card-subtitle {
  display: none; 
}

/* Alinhamento do Chip no canto inferior direito */
ion-card-content:last-child {
  position: absolute;
  bottom: 15px;
  right: 15px;
  padding: 0;
}

/* Estilização do Chip para parecer o botão vermelho da imagem */
ion-chip {
  --background: #ff2d37; /* Vermelho vibrante */
  color: #000000;        /* Texto preto */
  font-size: 1.1rem;
  padding: 25px 20px;    /* Aumenta o tamanho interno para ficar robusto */
  border-radius: 20px;   /* Bordas arredondadas do botão */
  font-weight: normal;
  margin: 0;
}
</style>
