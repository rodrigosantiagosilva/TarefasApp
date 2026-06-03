import { ref } from 'vue'

const Logado = ref(
  localStorage.getItem('Logado') === 'true'
)

export function useLogin() {
  const email = ref('')
  const senha = ref('')

  const mensagem = ref('')
  const isAlertOpen = ref(false)

  function fazerLogin() {

    const usuarios = JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    )

    const usuarioExiste = usuarios.find(
      (u: any) =>
        u.email === email.value &&
        u.senha === senha.value
    )

    if (usuarioExiste) {

      mensagem.value = 'Login realizado com sucesso'
      isAlertOpen.value = true
      Logado.value = true

      // Salva o estado de login
      localStorage.setItem('Logado', 'true')

      // Salva o usuário logado
      localStorage.setItem(
        'usuarioLogado',
        JSON.stringify(usuarioExiste)
      )

    } else {

      mensagem.value = 'Email ou senha inválidos'
      isAlertOpen.value = true
      Logado.value = false

      localStorage.setItem('Logado', 'false')
    }
  }

  function logout() {
    Logado.value = false

    localStorage.setItem('Logado', 'false')
    localStorage.removeItem('usuarioLogado')
  }

  return {
    email,
    senha,
    Logado,
    mensagem,
    isAlertOpen,
    fazerLogin,
    logout
  }
}