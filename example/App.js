import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  NativeModules,
  Alert,
} from 'react-native';

import {DocumentView, RNPdftron, Config} from 'react-native-pdftron/src';

const path =
  'https://intro-eth.tiiny.site/intro-to-ethereum-2023-06-08T11-57-49.963Z.pdf';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    RNPdftron.enableJavaScript(true);
  }

  onLeadingNavButtonPressed = () => {
    console.log('leading nav button pressed');
    if (Platform.OS === 'ios') {
      Alert.alert(
        'App',
        'onLeadingNavButtonPressed',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      BackHandler.exitApp();
    }
  };

  onDocumentLoaded = () => {
    this._viewer.getOutlineList().then(outline => {
      console.log('=> outline', outline);
    });
  };

  render() {
    return (
      <DocumentView
        ref={c => (this._viewer = c)}
        document={path}
        showLeadingNavButton={true}
        onDocumentLoaded={this.onDocumentLoaded}
        leadingNavButtonIcon={
          Platform.OS === 'ios'
            ? 'ic_close_black_24px.png'
            : 'ic_arrow_back_white_24dp'
        }
        onLeadingNavButtonPressed={this.onLeadingNavButtonPressed}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
