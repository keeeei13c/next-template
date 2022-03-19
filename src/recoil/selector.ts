import { selector } from "recoil";
import { todoListState, searchTextFormState } from "./atoms";
import type { Todo } from "src/types";

export const searchedTodoListSelector = selector({
  key: "searchedTodoListSelector",
  get: ({ get }) => {
    const todoList: Todo[] = get(todoListState);
    const searchText: string = get(searchTextFormState);

    return searchText
      ? todoList.filter((todo) => todo.title.includes(searchText))
      : todoList;
  },
});
