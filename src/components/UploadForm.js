import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { FormStyled } from './UploadForm.styled'
const UploadForm = () => {
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)

    const imgTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/webp',
        'image/svg+xml',
        'image/tiff',
        'image/heic',
        'image/heif',
    ]

    const changeHandler = (e) => {
        let selectedImg = e.target.files[0]

        if (selectedImg && imgTypes.includes(selectedImg.type)) {
            setImage(selectedImg)
            setError(null)
        } else {
            setImage(null)
            setError('Please select a valid image file.')
        }
    }

    return (
        <FormStyled>
            <form>
                +
                <input type='file' onChange={changeHandler} />
                <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {image && <div>{image.name}</div>}
                    {image && <ProgressBar image={image} setImage={setImage} />}
                </div>
            </form>
        </FormStyled>
    )
}

export default UploadForm
