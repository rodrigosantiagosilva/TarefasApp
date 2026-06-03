import { ref, onMounted } from 'vue'

type Usuario = {
  nome: string
  email: string
  senha: string
}

export function usePerfil() {

  const nome = ref('')
  const email = ref('')

  function carregarPerfil() {
    const usuario: Usuario | null = JSON.parse(
      localStorage.getItem('usuarioLogado') || 'null'
    )

    if (usuario) {
      nome.value = usuario.nome
      email.value = usuario.email
    }
  }

  onMounted(() => {
    carregarPerfil()
  })

  return {
    nome,
    email,
    carregarPerfil
  }
}