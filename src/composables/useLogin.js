import { ref } from "vue"

import { auth } from '../services/firebase'

const error = ref(null)

async function login(email, password) {
  error.value = null

  try {
    const res = await auth.signInWithEmailAndPassword(email, password)

    if (!res) {
      throw new Error('Oops! Could not complete the login')
    }

    error.value = null

    return res
  } catch (err) {
    console.log(err.message)
    error.value = err.message;
  }
}

function useLogin() {
  return { error, login }
}

export default useLogin
