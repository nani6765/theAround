import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { ItodoItem } from '../../storage/todoAtom';
import useTodo from '../../storage/useTodo';
import { getStyle } from '../../style';

function TodoItem({ id, task, done }: ItodoItem) {
  const { doneTask, deleteTask } = useTodo();

  return (
    <View key={id} style={getStyle('itemContainer')}>
      <Pressable hitSlop={10} onPress={() => doneTask(id)}>
        {done ? (
          <MaterialCommunityIcons
            name="checkbox-intermediate"
            size={24}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={24}
            color="black"
          />
        )}
      </Pressable>
      <Text style={getStyle('itemText')}>{task}</Text>
      <Pressable hitSlop={10} onPress={() => deleteTask(id)}>
        <Feather name="trash" size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default TodoItem;
