const firebase = require('firebase/app')
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage')
const config = require('../../config').api.firebase

const firebaseApp = firebase.initializeApp(config)
const storage = getStorage(firebaseApp)

const uploadMovieVideo = async (file) => {
    const movieRef = ref(storage, `movie-videos/${Date.now()}-${file.originalname}`)
    await uploadBytes(movieRef, file.buffer)
    const movieURL = await getDownloadURL(movieRef)
    return movieURL
}