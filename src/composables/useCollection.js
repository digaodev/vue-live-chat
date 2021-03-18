import { ref } from 'vue'

import { db } from '../services/firebase'

function useCollection(collectionName) {
  const error = ref(null)

  async function addDoc(doc) {
    error.value = null

    try {
      await db.collection(collectionName).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'Oops! Could not send the message'
    }
  }

  return { error, addDoc }
}

export default useCollection