import { atom } from "recoil";
import type { Todo } from "src/types";

export const todoTitleFormValueState = atom<string>({
  key: "textState",
  default: "",
});

export const searchTextFormState = atom<string>({
  key: "searchTextForm",
  default: "",
});

export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: [
    { title: "one" },
    { title: "two" },
    { title: "three" },
  ],
});

