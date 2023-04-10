import React from 'react';
import ReactDom from 'react-dom';

// JSX記法：JSのなかでHTMLを記述していく
const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>おげんきですか？</p>
    </>

  );
};

ReactDom.render(<App />, document.getElementById("root"))
