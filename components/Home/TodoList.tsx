import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import TodoItem from './TodoItem';
import useTodo from '../../storage/useTodo';
import { getStyle } from '../../style';

function TodoList() {
  const { todos, dones } = useTodo();

  return (
    <SafeAreaView style={getStyle('todoContainer')}>
      <View style={getStyle('listView')}>
        <Text style={getStyle('listTitle')}>할 일</Text>
        {todos.length !== 0 ? (
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={getStyle('emptyListText')}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={getStyle('separator')} />
      <View style={getStyle('listView')}>
        <Text style={getStyle('listTitle')}>완료된 일</Text>
        {dones.length !== 0 ? (
          <FlatList
            data={dones}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={getStyle('emptyListText')}>완료된 일이 없습니다.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default TodoList;
