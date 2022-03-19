import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "src/recoil/selector";
import type { Todo } from "src/types";

export const TodoList = () => {
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <>
      <p>タスク一覧</p>
      <ul>
        {list.map((todo, index) => {
          return <li key={index}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};
