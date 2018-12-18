import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {height, width} from '../constants/Layout';


export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        text: this.props.menu.text,
        path: this.props.menu.path
      }
    }
  
    render() {
      return (
          <View style={styles.hpBoxView}>  
            <TouchableOpacity 
              style={styles.hpBox}
              onPress={this.props.onPress}>

              <Text style={styles.boxFont}>{this.state.text}</Text>
            </TouchableOpacity>
          </View>
      )
    }  
}

const styles = StyleSheet.create({
  boxFont: {
    fontFamily: 'Courier New',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 1.73,
    color: '#fff',
  },
  hpBoxView: {
    width: '50%',
  },
  hpBox: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  }
})