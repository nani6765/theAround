import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import type { ToastOptions } from 'react-native-toast-message/lib/src/types';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { ItodoItem, todoAtom } from './todoAtom';

const key = 'todo';

const useTodo = () => {
  const [todos, setTodos] = useRecoilState<ItodoItem[]>(todoAtom);
  const [retrievedFromStorage, setRetrievedFromStorage] = useState(false);
  const toastOpts: ToastOptions = {
    type: 'success',
    position: 'bottom',
    visibilityTime: 1000,
  };

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (!value) {
          return;
        }
        const restoredArray = JSON.parse(value);
        if (restoredArray.length > 0) {
          setTodos([...restoredArray]);
        }

        setRetrievedFromStorage(true);
      } catch (error) {
        console.error('useAsyncStorage getItem error:', error);
      }
    })();
  }, [setTodos]);

  const updateTodo = (
    newTodoList: ItodoItem[],
    type: 'add' | 'done' | 'delete',
  ) => {
    setTodos(newTodoList);
    try {
      AsyncStorage.setItem('tasks', JSON.stringify(newTodoList));
      switch (type) {
        case 'add':
          return Toast.show({
            ...toastOpts,
            text1: '추가되었습니다',
          });
        case 'done':
          return Toast.show({
            ...toastOpts,
            text1: '변경되었습니다',
          });
        case 'delete':
          return Toast.show({
            ...toastOpts,
            text1: '삭제되었습니다',
          });
      }
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = async (task: string) => {
    if (task.trim() === '') {
      return Toast.show({
        ...toastOpts,
        type: 'error',
        text1: '텍스트를 입력해주십시오.',
      });
    }

    if (todos.length > 4) {
      return Toast.show({
        ...toastOpts,
        type: 'error',
        text1: '최대 5개의 task를 입력할 수 있습니다.',
      });
    }

    const newTask = {
      id: uuidv4(),
      task,
      done: false,
    };
    const updatedTasks = [...todos, newTask];
    return updateTodo(updatedTasks, 'add');
  };

  const deleteTask = (id: string) => {
    const updatedTasks = todos.filter(todo => todo.id !== id);
    return updateTodo(updatedTasks, 'delete');
  };

  const doneTask = (id: string) => {
    const updatedTasks = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else return todo;
    });
    return updateTodo(updatedTasks, 'done');
  };

  return {
    todos: todos.filter(v => !v.done),
    dones: todos.filter(v => v.done),
    addTask,
    doneTask,
    deleteTask,
    retrievedFromStorage,
  };
};

export default useTodo;
