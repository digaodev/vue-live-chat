import { ref } from "vue"

import { auth } from '../services/firebase'

const error = ref(null)

async function logout() {
  error.value = null

  try {
    await auth.signOut()

    error.value = null
  } catch (err) {
    console.log(err.message)
    error.value = err.message;
  }
}

function useLogout() {
  return { error, logout }
}

export default useLogout
