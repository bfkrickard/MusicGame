import * as React from 'react'
import { Appbar } from 'react-native-paper'
import { Platform, View } from 'react-native'
import {PlayersContainer, ChoicesContainer} from 'AppContainers'
import styles from './styles'
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

/**
 * HomeContainer
 * @todo - only use AppBar on native apps. should use something else on web
 *       - or dont use appBar at all
 */
export const PlayContainer = () => {
  return (
    <View style={styles.main}>
      <Appbar.Header>
        <Appbar.Content title="Music Game" />
      </Appbar.Header>
      <PlayersContainer/>
      <ChoicesContainer/>
    </View>
  )
}