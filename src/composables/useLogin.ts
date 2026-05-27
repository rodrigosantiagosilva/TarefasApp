import { ref } from 'vue'
import { useCadastro } from './useCadastro'
  const Logado = ref(false)
export function useLogin() {
  const email = ref('')
  const senha = ref('')

  const mensagem = ref('')
  const isAlertOpen = ref(false)

  const { validarLogin } = useCadastro()

  function fazerLogin() {

    const usuarioExiste = validarLogin(
      email.value,
      senha.value
    )

    if (usuarioExiste) {

      mensagem.value = 'Login realizado com sucesso'
      isAlertOpen.value = true
      Logado.value = true
    } else {

      mensagem.value = 'Email ou senha inválidos'
      isAlertOpen.value = true
      Logado.value = false
    }
  }

  return {
    email,
    senha,
    Logado,
    mensagem,
    isAlertOpen,
    fazerLogin
  }
}