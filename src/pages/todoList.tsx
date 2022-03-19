import { AddButton, SearchForm, TitleForm, TodoList } from "src/component/Todo";

const TodoListPage = () => {
  return (
    <>
      <div className="m-3">
        <div>
          <SearchForm />
        </div>
        <TitleForm />
        <AddButton />
        <TodoList />
      </div>
    </>
  );
};

export default TodoListPage;
