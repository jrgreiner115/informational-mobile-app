import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import HomePageBox from '../components/HomePageBox'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';


export default class AboutScreen extends React.Component {  
  static navigationOptions = {
    header: null,
  };
  
  returnHome = () => {
    this.props.navigation.navigate("Home")
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.button}>
          <Button
          onPress={this.returnHome}
          title="Learn More"
          color="#fff">
          </Button>
          <Text style={styles.font}>
            ABOUTOUTOUTOUOUTOUTOUTOUTOUT
          </Text>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  button: {  
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
  },
  font: {
    color: "#fff",
    fontFamily: "Courier New",
    fontSize: 20,
  }
});