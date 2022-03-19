import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        title="text"
        onChange={handleChange}
        value={text}
        placeholder={text}
      />
      <p>{text ? text : "なし"}</p>
      <p>文字数{text.length}</p>
    </div>
  );
};

export default Home;
