import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { searchTextFormState } from "src/recoil/atoms";

export const SearchForm = () => {
  const searchTextFormValue: string = useRecoilValue(searchTextFormState);
  const setSearchTextFormValue: SetterOrUpdater<string> =
    useSetRecoilState(searchTextFormState);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTextFormValue(e.target.value);
    },
    [setSearchTextFormValue]
  );
  return (
    <>
      <label>
        検索:
        <input
          type="text"
          value={searchTextFormValue}
          onChange={onChange}
          className="m-3"
        />
      </label>
    </>
  );
};
