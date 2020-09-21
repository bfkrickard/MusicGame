import React, {useState} from 'react'
import { Text, TextInput, Title, Button } from 'react-native-paper'
import { View } from 'react-native'
import styles from './styles'

export const LoginContainer = () => {

  // keeps track of state locally
  const [displayName, setDisplayName] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  
  const contentStyles = styles.content

  return (
    <View style={styles.main}>
      <View style={styles.header.main}>
        <Title style={styles.header.title}>
          Music Game
        </Title>
        {/* TODO: replace with description of game */}
        <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Text>
      </View>

      <View style={contentStyles.main}>
        <TextInput
          style={contentStyles.input}
          label="Enter a name (displays to everyone):"
          value={displayName}
          onChangeText={text => {
            setDisplayName(text)
            text.length > 0 ? setButtonDisabled(false) : setButtonDisabled(true) 
          }}
        />
        <Button 
          style={contentStyles.button.main}
          contentStyle={contentStyles.button.contentStyle}
          icon="spotify" 
          mode="contained" 
          onPress={() => console.log('login to spotify')}
          disabled={buttonDisabled}
        >
          Login to Spotify
        </Button>
      </View>
    </View>
  )
}