import React from 'react';
import { View, Text } from 'react-native';

import { getStyle } from '../../style';

function HeaderView({ url }: { url: string }) {
  return (
    <View style={getStyle('header')}>
      <Text style={getStyle('headerText')}>{url}</Text>
    </View>
  );
}

export default HeaderView;
