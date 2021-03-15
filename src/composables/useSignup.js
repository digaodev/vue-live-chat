import { ref } from "vue"

import { auth } from '../services/firebase'

const error = ref(null)

async function signup(displayName, email, password) {
  error.value = null

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)

    if (!res) {
      throw new Error('Oops! Could not complete the signup')
    }

    await res.user.updateProfile({ displayName })
    error.value = null

    return res
  } catch (err) {
    console.log(err.message)
    error.value = err.message;
  }
}

function useSignup() {

  return { error, signup }
}

export default useSignup
