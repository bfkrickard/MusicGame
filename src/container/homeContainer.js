import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


export const HomeContainer = () => {
  return (
    <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  )
}