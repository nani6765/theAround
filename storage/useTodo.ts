import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { ItodoItem, todoAtom } from './todoAtom';

const key = 'todo';

const useTodo = () => {
  const [todos, setTodos] = useRecoilState<ItodoItem[]>(todoAtom);
  const [retrievedFromStorage, setRetrievedFromStorage] = useState(false);

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

  const updateTodo = (newTodoList: ItodoItem[]) => {
    setTodos(newTodoList);
    try {
      AsyncStorage.setItem('tasks', JSON.stringify(newTodoList));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = async (task: string) => {
    if (task.trim() === '') {
      return null;
    }
    if (task.length > 5) {
      return null;
    }

    const newTask = {
      id: uuidv4(),
      task,
      done: false,
    };
    const updatedTasks = [...todos, newTask];
    return updateTodo(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = todos.filter(todo => todo.id !== id);
    return updateTodo(updatedTasks);
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
    return updateTodo(updatedTasks);
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
