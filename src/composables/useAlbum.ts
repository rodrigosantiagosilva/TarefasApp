import { ref } from "vue"
import {
  figurinhas as figurinhasData,
  type Figurinha
} from "../data/Figurinhas"

const dadosSalvos = localStorage.getItem("figurinhas")

const figurinhas = ref<Figurinha[]>(
  figurinhasData.map(figurinhaOriginal => {

    const figurinhaSalva = dadosSalvos
      ? (JSON.parse(dadosSalvos) as Figurinha[]).find(
          f => f.id === figurinhaOriginal.id
        )
      : undefined

    return {
      ...figurinhaOriginal,
      coletada:
        figurinhaSalva?.coletada ??
        figurinhaOriginal.coletada
    }
  })
)

export function useAlbum() {

  const alertaAberto = ref(false)
  const mensagemAlerta = ref("")

  function salvar() {
    localStorage.setItem(
      "figurinhas",
      JSON.stringify(figurinhas.value)
    )
  }

  function coletarFigurinha() {

    const naoColetadas = figurinhas.value.filter(
      figurinha => figurinha.coletada === "no"
    )

    if (naoColetadas.length === 0) {
      mensagemAlerta.value =
        "Você já completou o álbum!"

      alertaAberto.value = true
      return
    }

    const indice = Math.floor(
      Math.random() * naoColetadas.length
    )

    const sorteada = naoColetadas[indice]

    sorteada.coletada = "yes"

    salvar()

    mensagemAlerta.value =
      `Você coletou ${sorteada.nome}!`

    alertaAberto.value = true
  }

  function resetarAlbum() {

    figurinhas.value.forEach(figurinha => {
      figurinha.coletada = "no"
    })

    salvar()

    mensagemAlerta.value =
      "Todas as figurinhas foram resetadas!"

    alertaAberto.value = true
  }

  return {
    figurinhas,
    coletarFigurinha,
    resetarAlbum,
    alertaAberto,
    mensagemAlerta
  }
}