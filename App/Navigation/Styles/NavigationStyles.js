import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }

})
