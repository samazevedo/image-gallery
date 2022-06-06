import { useState, useEffect } from 'react'
import { imageStorage } from '../firebase/firebase'

const useStorage = (image) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // Create a storage reference from our storage service
        const storageRef = imageStorage.ref(image.name)

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
                setUrl(url)
            }
        )
    }, [image])

    return { progress, error, url }
}
export default useStorage
