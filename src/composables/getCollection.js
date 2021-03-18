import { ref, watchEffect } from 'vue'

import { db } from '../services/firebase'

function getCollection(collectionName) {
  const error = ref(null)
  const documents = ref(null)

  let collectionRef = db.collection(collectionName).orderBy('createdAt')

  const unsubscribeSnapshot = collectionRef.onSnapshot(snap => {
    let results = []

    snap.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })

    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'Oops! Could not fetch any data'
  })

  watchEffect((onInvalidate) => {
    // unsubscribe from snapshot when component unmounts
    onInvalidate(() => unsubscribeSnapshot())
  })

  return { error, documents }
}

export default getCollection