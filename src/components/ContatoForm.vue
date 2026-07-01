<template>
    <ion-list>
        <ion-item>
            <ion-label>Cadastro de Contatos</ion-label>
        </ion-item>
        <ion-item>
            <ion-label position="stacked">Nome</ion-label>
            <ion-input v-model="form.nome" required />
        </ion-item>
        <ion-note color ="danger" v-if="errors.nome">{{ errors.nome }}</ion-note>

        <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="form.email" required />
        </ion-item>
        <ion-note color ="danger" v-if="errors.nome">{{ errors.email }}</ion-note>

        <ion-item>
            <ion-label position="stacked">Telefone</ion-label>
            <ion-input v-model="form.telefone"/>
        </ion-item>

        <ion-button expand="block" type ="button" @click="salvarContato">Salvar</ion-button>
        <ion-toast :is-open="toast.show" :massage="toast.massage" duration="2000" @ionDismiss="toast.show = false"></ion-toast>

</ion-list>
</template>
<script setup lang="ts">
import {IonList, IonItem, IonLabel,IonButton,IonToast} from '@ionic/vue'
import {reactive} from 'vue'
import {addContato} from '@/services/database'

const form = reactive({nome: '',email: '', telefone:''})
const toast = reactive({show: false,massage:''})
const errors = reactive({nome: '',email: ''})
function clearErrors(){
    errors.nome = ''
    errors.email = ''
}
async function salvarContato(){
    clearErrors
    
    if(!form.nome || !form.email){
        if (!form.nome){
            errors.nome ='Nome é obrigatório'
        }
        if (!form.email){
            errors.email = 'Email é obrigatório'
        }
        toast.show = true
        toast.massage = 'Preencha os campos obringatóriis'
        return
    }

    await addContato(form.nome, form.email, form.telefone)
    form.nome = ''
    form.email = ''
    form.telefone = ''
    toast.show = true
    toast.massage = 'Contato salvo com sucesso'
    window.dispatchEvent(new CustomEvent('contato-salvo'))




}


</script>