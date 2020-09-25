import React from 'react'
import {PlayContainer, LoginContainer} from 'AppContainers'
import { Provider as PaperProvider } from 'react-native-paper'
import {theme} from 'AppTheme'
import {FontAwesome5} from '@expo/vector-icons'

export default function App() {
  return (
    <PaperProvider 
      settings={{
        icon: props => <FontAwesome5 {...props} />,
      }}
      theme={theme}
    >
      <LoginContainer/>
    </PaperProvider>
  )
}

