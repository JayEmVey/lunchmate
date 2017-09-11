import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyNotificationsSettingsScreenStyle'

class MyNotificationsSettingsScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>MyNotificationsSettingsScreen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')}
            title="Go to settings tab"
          />
          <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNotificationsSettingsScreen)
