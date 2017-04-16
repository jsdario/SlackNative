/**
 * Sample React Native macOS App
 * https://github.com/ptmt/react-native-macos
 */
 import React from 'react';
 import ReactNative from 'react-native-macos';
 const {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   WebView,
 } = ReactNative;

const SlackNative = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 20}} />
        <WebView
          userAgent="Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.41 Safari/534.7"
          source={{uri: "https://slack.com/signin"}}
          style={styles.webview}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    backgroundColor: 'pink',
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('SlackNative', () => SlackNative);
