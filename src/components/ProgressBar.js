import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { ProgressBarStyled } from './ProgressBar.styled'
const ProgressBar = ({ image, setImage }) => {
    const { url, progress } = useStorage(image)

    useEffect(() => {
        if (url) {
            setImage(null)
        }
    }, [url, setImage])

    return <ProgressBarStyled progress={progress} />
}

export default ProgressBar
