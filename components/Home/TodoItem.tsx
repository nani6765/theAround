import React from 'react';
import { Pressable, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import { ItodoItem } from '../../storage/todoAtom';
import useTodo from '../../storage/useTodo';
import { getStyle } from '../../style';

function TodoItem({ id, task, done }: ItodoItem) {
  const { doneTask, deleteTask } = useTodo();

  return (
    <View key={id} style={getStyle('itemContainer')}>
      <Pressable
        hitSlop={10}
        style={getStyle('itemCheckbox')}
        onPress={() => doneTask(id)}>
        {done ? (
          <SvgUri source={require('../../assets/todo/checked.svg')} />
        ) : (
          <SvgUri source={require('../../assets/todo/unchecked.svg')} />
        )}
      </Pressable>
      <Text>{task}</Text>
      <Pressable
        style={[
          getStyle('deleteButton'),
          done ? null : getStyle('deleteButtonDone'),
        ]}
        hitSlop={10}
        onPress={() => deleteTask(id)}>
        <SvgUri source={require('../../assets/todo/delete.svg')} />
      </Pressable>
    </View>
  );
}

export default TodoItem;
