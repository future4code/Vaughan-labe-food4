export const goToLogin = (Navigate) => {
  Navigate("/login")
}
export const goToSingUp = (Navigate) => {
  Navigate("/cadastro")
}
export const goToAdress = (Navigate) => {
  Navigate("/endereco")
}
export const goToCar = (Navigate) => {
  Navigate("/carrinho")
}
export const goToFeed = (Navigate) => {
  Navigate("/feed")
}
export const goToProfile = (Navigate) => {
  Navigate("/perfil")
}
export const goToRestaurant = (Navigate, id) => {
  Navigate(`/restaurante/${id}`)
}
export const goToSearch = (Navigate) => {
  Navigate("/pesquisa")
}
export const goToEditLogin = (Navigate) => {
  Navigate("/perfil/editarPerfil")
}
export const goToEditAddress = (Navigate) => {
  Navigate("/perfil/editarEndereco")
}

