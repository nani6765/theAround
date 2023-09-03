import React, { useState } from 'react';
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';

import HeaderView from '../components/Home/HeaderView';
import URLInput from '../components/Home/URLInput';
import useURL from '../storage/useURL';
import { getStyle } from '../style';

function HomeScreen() {
  const { url: savedURL, setURL: savedSetURL } = useURL();
  const [url, setURL] = useState(savedURL);

  return (
    <View style={getStyle('container')}>
      <ScrollView style={getStyle('content')}>
        <HeaderView url={savedURL} />
        <URLInput url={url} setURL={setURL} />
        <View style={getStyle('btnContainer')}>
          <TouchableHighlight
            style={getStyle('btn')}
            underlayColor={'#efefef'}
            onPress={() => {
              savedSetURL(url);
            }}>
            <Text style={getStyle('submit')}>변경</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
