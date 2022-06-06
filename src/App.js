import { MainStyled } from './App.styled'
import { GlobalStyled } from './shared/Global.js'
import { ThemeProvider } from 'styled-components'
import { theme } from '././shared/theme.js'
import UploadForm from './firebase/UploadForm'
function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainStyled>
                <GlobalStyled />
                <h1>Gallery</h1>
                <h2>My Gallery</h2>
                <p>A collection of images of you and me.</p>
                <UploadForm />
            </MainStyled>
        </ThemeProvider>
    )
}

export default App
