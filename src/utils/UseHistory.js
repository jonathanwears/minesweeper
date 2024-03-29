import { useState } from 'react';

function History(init = []) {
  const [history, setHistory] = useState(init);

  function add(element) {
    const arr = history;
    arr.push(element);
    setHistory(arr);
  }

  function remove() {
    if (history.length < 0) return;
    const arr = history;
    arr.pop();
    setHistory(arr);
  }

  function isEmpty() {
    return history.length === 0;
  }

  function peek() {
    if (history.length > 0) {
      return history.at(-1);
    }
  }

  function empty() {
    setHistory([]);
  }

  return {
    history,
    setHistory,
    add,
    remove,
    isEmpty,
    peek,
    empty,
  };
}

export default History;
