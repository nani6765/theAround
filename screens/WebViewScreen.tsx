import React from 'react';
import { WebView } from 'react-native-webview';

import useURL, { initialValue } from '../storage/useURL';

function WebViewScreen() {
  const { url } = useURL();
  return <WebView source={{ uri: url ?? initialValue }} />;
}

export default WebViewScreen;
