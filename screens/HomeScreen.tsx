import React from 'react';
import { View, ScrollView } from 'react-native';

import HeaderView from '../components/Home/HeaderView';
import TodoInput from '../components/Home/TodoInput';
import TodoList from '../components/Home/TodoList';
import { getStyle } from '../style';

function HomeScreen() {
  return (
    <View style={getStyle('container')}>
      <ScrollView style={getStyle('content')}>
        <HeaderView />
        <TodoList />
        <TodoInput />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
