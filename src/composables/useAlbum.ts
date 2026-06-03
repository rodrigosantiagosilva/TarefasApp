import { ref } from "vue"
import {figurinhas as figurinhasData} from "../data/Figurinhas"
  
const figurinhas = ref([...figurinhasData])


export function useAlbum() {
  function irParaDetalhe(id: number) {
    console.log('Figurinha:', id)
  }

  function coletarFigurinha(id: number) {
    const figurinha = figurinhas.value.find(
      f => f.id === id
    )

    if (figurinha) {
      figurinha.coletada = 'yes'
    }
  }

  return {
    figurinhas,
    coletarFigurinha,
    irParaDetalhe
  }
}