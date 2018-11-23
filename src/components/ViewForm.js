import React from 'react';
import { KeyboardAvoidingView } from 'react-native'
import DissmissKeyboard from './DissmissKeyboard';

export default ({children}) => (
  <KeyboardAvoidingView style = {{flex: 1}} behavior="position" enabled>
    <DissmissKeyboard>
      {children}
    </DissmissKeyboard>
  </KeyboardAvoidingView>
)