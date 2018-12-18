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
import HomePageBox from '../components/HomePageBox'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

const menuOptions = {
  About: {text: "About", path: 'About'},
  Wishlist: {text: "Wishlist", path: 'wishlist'},
  LearnMore: {text: "Learn More", path: 'learnmore'},
  AppleSauce: {text: "Apple Sauce!", path: 'applesauce'}
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  HandlePress = (path) => {
    console.log("HELLO", path)
    this.props.navigation.navigate(path)
  }

  createBoxes = () => {
    let menu = []
    let i = 0
    for (let option in menuOptions) {
      console.log(option);
      menu.push(<HomePageBox        
        key={i+1} 
        menu={menuOptions[option]} 
        style={styles.box}
        onPress={() => this.HandlePress(option)}/>)
      i++
    }
    return menu
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          {this.createBoxes()}
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000',
  },
  container: {
    paddingVertical: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  box: {  
  },
});
