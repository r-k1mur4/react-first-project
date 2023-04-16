  import { useState } from "react";
  import { useEffect } from "react";
  // コンポーネントColorMessageを読み込み
  import { ColoredMessage } from "./components/ColorMessage";


// Appという関数コンポーネントの作成
export const App = () => {

  // State群
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // カウントアップ関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 顔文字表示非表示切替関数
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 第二引数に設定した変数の値が変化したときだけ第一引数の処理を実行する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  },[num]);



  return (
    // <fragment></fragment>でも可
    <>
      <h1
        style={{
          color: "red",
        }}
      >
        こんにちは
      </h1>

      <ColoredMessage color="tan" fontSize="16px">おげんきですか？？？</ColoredMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br></br>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};
