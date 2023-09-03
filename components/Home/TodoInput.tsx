import React, { useState } from 'react';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';

import useTodo from '../../storage/useTodo';
import { getStyle } from '../../style';
import { textColor } from '../../style/variable';

function TodoInput() {
  const [todo, setTodo] = useState('');
  const { addTask } = useTodo();

  return (
    <View>
      <View style={getStyle('inputContainer')}>
        <TextInput
          value={todo}
          placeholder="할 일을 입력해주세요."
          placeholderTextColor={textColor.GREY}
          selectionColor={'#666'}
          onChangeText={value => setTodo(value)}
          style={getStyle('input')}
        />
      </View>
      <View style={getStyle('btnContainer')}>
        <TouchableHighlight
          style={getStyle('btn')}
          underlayColor={'#efefef'}
          onPress={() => {
            addTask(todo);
            setTodo('');
          }}>
          <Text style={getStyle('submit')}>등록</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default TodoInput;
