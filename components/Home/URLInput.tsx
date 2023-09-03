import React, { Dispatch, SetStateAction } from 'react';
import { TextInput, View } from 'react-native';

import { getStyle } from '../../style';
import { textColor } from '../../style/variable';

interface IURLInputProps {
  url: string;
  setURL: Dispatch<SetStateAction<string>>;
}

function URLInput({ url, setURL }: IURLInputProps) {
  return (
    <View style={getStyle('inputContainer')}>
      <TextInput
        value={url}
        placeholder="url을 입력해주세요."
        placeholderTextColor={textColor.GREY}
        selectionColor={'#666'}
        onChangeText={setURL}
        style={getStyle('input')}
      />
    </View>
  );
}

export default URLInput;
