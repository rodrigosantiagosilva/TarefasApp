import { ref } from 'vue'
import { useRouter } from 'vue-router'
type Usuario = {
  nome: string
  email: string
  senha: string
}

const usuarios = ref<Usuario[]>([])

export function useCadastro() {
  const router = useRouter()

  const nome = ref('')
  const email = ref('')
  const senha = ref('')

  function cadastrar() {
    if (!nome.value || !email.value || !senha.value) {
      alert('aaaaaaaaaa')
      router.push('/tabs/home')
      return
    }

    const existe = usuarios.value.some(
      (u: Usuario) => u.email === email.value
    )

    if (existe) {
      alert('Esse email já está cadastrado')
      return
    }

    usuarios.value.push({
      nome: nome.value,
      email: email.value,
      senha: senha.value
    })

    alert('Cadastro realizado com sucesso!')

    nome.value = ''
    email.value = ''
    senha.value = ''


  }

  function validarLogin(emailLogin: string, senhaLogin: string) {
    return usuarios.value.find(
      (u: Usuario) =>
        u.email === emailLogin &&
        u.senha === senhaLogin
    )
  }

  return {
    nome,
    email,
    senha,
    usuarios,
    cadastrar,
    validarLogin
  }
}