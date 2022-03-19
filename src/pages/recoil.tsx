import { useRecoilValue, useRecoilState } from "recoil";
import { charCountState } from "src/recoil/selector";
import { textState } from "src/recoil/atoms";

const Recoil = () => {
  const count = useRecoilValue(charCountState);
  const [text, setText] = useRecoilState(textState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Recoil</h1>
      <input type="text" title="text" onChange={handleChange} value={text} />
      <p>{text}</p>
      <p>文字数：{count}</p>
    </div>
  );
};

export default Recoil;
