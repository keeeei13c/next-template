import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormValueState } from "src/recoil/atoms";

export const TitleForm = () => {
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormValueState);
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormValueState
  );
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitleFormValue(e.target.value);
    },
    [setTodoTitleFormValue]
  );

  return (
    <>
      <label>
        タスク名:
        <input
          type="text"
          value={todoTitleFormValue}
          onChange={onChange}
          className="m-3"
        />
      </label>
    </>
  );
};
