import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormValueState } from "src/recoil/atoms";
import { todoListState } from "src/recoil/atoms";
import type { Todo } from "src/types";

export const AddButton = () => {
  const todoList: Todo[] = useRecoilValue(todoListState);
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormValueState);
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormValueState
  );
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);
  const onClick = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }]);
    setTodoTitleFormValue("");
  }, [todoList, todoTitleFormValue, setTodoList, setTodoTitleFormValue]);

  return <button onClick={onClick}>追加</button>;
};
