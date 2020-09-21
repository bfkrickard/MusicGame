import React from 'react'
import {HomeContainer} from './src/container/homeContainer'
import { Provider as PaperProvider } from 'react-native-paper'
import {theme} from './src/theme'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomeContainer/>
    </PaperProvider>
  )
}

