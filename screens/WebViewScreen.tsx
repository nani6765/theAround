import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import useURL from '../storage/useURL';

function WebViewScreen() {
  const webViewRef = useRef<null | any>();
  const { url } = useURL();

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  }, [url]);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} ref={ref => (webViewRef.current = ref)} />
    </View>
  );
}

export default WebViewScreen;
