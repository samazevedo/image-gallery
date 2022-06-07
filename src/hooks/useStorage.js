import { useState, useEffect } from 'react'
import { galleryStorage, galleryFirestore, timestamp } from '../firebase/config'

const useStorage = (image) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // Create a storage reference from our storage service
        const storageRef = galleryStorage.ref(image.name)

        // Upload file and metadata to the object 'images/mountains.jpg'
        const collectionRef = galleryFirestore.collection('images')
        storageRef.put(image).on(
            'state_changed',
            (snapshot) => {
                // We can listen for state changes from the uploader, including progress, success, and error events.
                const percentage = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )

                setProgress(percentage)
            },
            (err) => {
                setError(err)
            },
            async () => {
                const url = await storageRef.getDownloadURL()
                const createdAt = timestamp()
                collectionRef.add({ url, createdAt })
                setUrl(url)
            }
        )
    }, [image])

    return { progress, error, url }
}
export default useStorage
