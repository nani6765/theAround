import { atom } from 'recoil';

export interface ItodoItem {
  id: string;
  task: string;
  done: boolean;
}

export const todoAtom = atom<ItodoItem[]>({
  key: 'todoAtom',
  default: [],
});
