import * as React from 'react'
import { View } from 'react-native'
import {IconButton} from 'AppComponents'
import { Surface, Text, Headline } from 'react-native-paper'
import styles from './styles'

export const ChoicesContainer = () => {
  return (
    <View style={styles.main}>
      <Surface style={styles.surface}>
        <Headline style={styles.title}>
          Select your answer:
        </Headline>
        <IconButton
          active
          text={'hello'}
          onPress={() => console.log('press')}
        />
      </Surface>
    </View>
  )
}