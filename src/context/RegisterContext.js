import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  text: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  changeText: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default RegisterContext
