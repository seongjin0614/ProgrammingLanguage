import './Editor.css';
import { useState, useRef } from 'react';

export default function Editor({ onCreate }) {

  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onsubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onkeyDown = (e) => {
    if (e.keyCode === 13 ) {
      onsubmit();
    }
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChange}
        onKeyDown={onkeyDown}
        placeholder="새로운 Todo..." />
      <button onClick={onsubmit}>추가</button>
    </div>
  )
}
