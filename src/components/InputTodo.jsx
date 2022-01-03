import React from "react";

export const inputTodo = (props) => {
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangetodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
