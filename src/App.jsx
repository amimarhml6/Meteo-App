import './App.css'
import {ThemeProvider , createTheme} from '@mui/material/styles'
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'
import {InfoContext} from './Component/Context/InfoContext'
import { useState} from 'react';

// web Site using in this app :
  // For Api : https://openweathermap.org/ for weather data
  // Mui Material : https://mui.com/material-ui/getting-started/overview/ for Material UI components
  // React i18next : https://react.i18next.com/ for internationalization
  // Axios : https://axios-http.com/docs/intro for making HTTP requests
  // Moment.js : https://momentjs.com/ for date and time formatting 
  //  Font : https://fonts.google.com/ for custom fonts
  //  Icons : https://mui.com/material-ui/material-icons/ for Material Icons
  //  Flag CDN : https://flagcdn.com/ for country flags

function App() {
  
  const [Lang, setLang] = useState('English');
  const [Region, setRegion] = useState('Algiers');


  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
    typography: {
      fontFamily: 'face',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <InfoContext.Provider value={{Lang, setLang, Region, setRegion}}>
        <div className="App">
          <div className="App-header">
            <Header/>
          </div>
          <div className="App-body">
            <Body/>
          </div>
        </div>  
      </InfoContext.Provider>
    </ThemeProvider>
  )
}

export default App
