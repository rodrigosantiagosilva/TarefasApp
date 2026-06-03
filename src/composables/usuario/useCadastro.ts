import { ref } from 'vue'
import { useRouter } from 'vue-router'

type Usuario = {
  nome: string
  email: string
  senha: string
}

// Carrega os usuários do localStorage
const usuarios = ref<Usuario[]>(
  JSON.parse(localStorage.getItem('usuarios') || '[]')
)

export function useCadastro() {
  const router = useRouter()

  const nome = ref('')
  const email = ref('')
  const senha = ref('')

  function cadastrar() {

    if (!nome.value || !email.value || !senha.value) {
      alert('Preencha todos os campos')
      return
    }

    const usuarioExistente = usuarios.value.find(
      (u: Usuario) => u.email === email.value
    )

    // Se já existe, tenta fazer login
    if (usuarioExistente) {

      if (usuarioExistente.senha !== senha.value) {
        alert('Senha incorreta!')
        return
      }

      localStorage.setItem(
        'usuarioLogado',
        JSON.stringify(usuarioExistente)
      )

      alert('Login realizado com sucesso!')

      router.push('/tabs/home')
      return
    }

    // Novo cadastro
    const novoUsuario: Usuario = {
      nome: nome.value,
      email: email.value,
      senha: senha.value
    }

    usuarios.value.push(novoUsuario)

    // Salva lista de usuários
    localStorage.setItem(
      'usuarios',
      JSON.stringify(usuarios.value)
    )

    // Salva usuário logado
    localStorage.setItem(
      'usuarioLogado',
      JSON.stringify(novoUsuario)
    )

    alert('Cadastro realizado com sucesso!')

    nome.value = ''
    email.value = ''
    senha.value = ''

    router.push('/tabs/home')
  }

  function validarLogin(
    emailLogin: string,
    senhaLogin: string
  ) {
    const usuario = usuarios.value.find(
      (u: Usuario) =>
        u.email === emailLogin &&
        u.senha === senhaLogin
    )

    if (usuario) {
      localStorage.setItem(
        'usuarioLogado',
        JSON.stringify(usuario)
      )
    }

    return usuario
  }

  function removerTodosUsuarios() {
    usuarios.value = []
    localStorage.removeItem('usuarios')
    localStorage.removeItem('usuarioLogado')
  }

  function logout() {
    localStorage.removeItem('usuarioLogado')
    router.push('/login')
  }

  function getUsuarioLogado(): Usuario | null {
    return JSON.parse(
      localStorage.getItem('usuarioLogado') || 'null'
    )
  }

  return {
    nome,
    email,
    senha,
    usuarios,
    cadastrar,
    validarLogin,
    removerTodosUsuarios,
    logout,
    getUsuarioLogado
  }
}