import useStorage from '../hooks/useStorage'

const ProgressBar = ({ image, setImage }) => {
    const { progress, url } = useStorage(image)
    console.log(progress, url)

    return (
        <div className='progress-bar'>
            <h1>progress bar</h1>
        </div>
    )
}

export default ProgressBar
