import React from 'react'
import {LoginContainer} from 'AppContainers'
import { Provider as PaperProvider } from 'react-native-paper'
import {theme} from 'AppTheme'
import {FontAwesome5} from '@expo/vector-icons'
import { Provider } from 'react-redux'
import {store} from 'AppStore'


export default function App() {
  return (
    <PaperProvider 
      settings={{
        icon: props => <FontAwesome5 {...props} />,
      }}
      theme={theme}
    >
      <Provider store={store}>
        <LoginContainer/>
      </Provider>
    </PaperProvider>
  )
}

