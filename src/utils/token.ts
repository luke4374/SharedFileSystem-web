export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = (token: string) => {
  return localStorage.getItem(token)
}