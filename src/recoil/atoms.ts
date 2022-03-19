import { atom } from "recoil";

export const textState = atom({
  key: "textState", 
  default: "test", 
});

export const todoListState = atom({
  key: "TodoList",
  default: [],
});
