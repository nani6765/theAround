import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

// import useURL from '../storage/useURL';

function WebViewScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://www.naver.com' }} />
    </View>
  );
}

export default WebViewScreen;
