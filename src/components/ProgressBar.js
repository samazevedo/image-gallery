import useStorage from '../hooks/useStorage'
import { ProgressBarStyled } from './ProgressBar.styled'
const ProgressBar = ({ image, setImage }) => {
    const { progress, url } = useStorage(image)
    console.log(progress, url)

    return <ProgressBarStyled progress={progress}>Progress</ProgressBarStyled>
}

export default ProgressBar
