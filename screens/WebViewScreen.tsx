import React from 'react';
import { WebView } from 'react-native-webview';

function WebViewScreen() {
  return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
}

export default WebViewScreen;
