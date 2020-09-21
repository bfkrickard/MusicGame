import * as React from 'react'
import { Button } from 'react-native-paper'

/**
 * IconButton that displays a check icon if active=true
 * @param {object} props 
 * @param {string} props.text
 * @param {Function} props.onPress
 * @param {boolean} props.active
 */
export const IconButton = (props) => {
  const {text, onPress, active=false, ...otherProps} = props

  return (
    <Button 
      icon={active ? "check" : null } 
      mode={active ? "contained" : "outlined"} 
      onPress={onPress}
      {...otherProps}
    >
      {text}
    </Button>
  )
}