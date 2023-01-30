import React, { useState, useRef } from "react";

import useClickOutside from "./useOutsideClick";
import styles from "./EditableText.module.css";

type Props = {
  key: string;
  editable: boolean;
  editing: boolean;
  text?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  className?: string;
  inputClassName?: string;
  spanClassName?: string;
  onChange?: (key: string, text?: string) => void;
};

const EditableText = (props: Props) => {
  const mainSpanRef = useRef<HTMLSpanElement>(null);

  const [editing, setEditing] = useState<boolean>(
    props.editable && props.editing
  );
  const [text, setText] = useState<string>(props.text ?? "");

  useClickOutside(mainSpanRef, () => {
    setEditing(false);
  });

  const startEditing = () => {
    if (props.editable) {
      setEditing(true);
    }
  };

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (props.onChange) {
      props.onChange(props.key, event.target.value);
    }
  };

  return (
    <span ref={mainSpanRef}>
      <input
        hidden={!editing}
        className={`${styles["editable"]} ${props.className ?? ""} ${
          props.inputClassName ?? ""
        }`.trimEnd()}
        type="text"
        placeholder={props.placeholder}
        value={text}
        onChange={changeTextHandler}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
      <span
        hidden={editing}
        className={`${styles["editable"]} ${props.className ?? ""} ${
          props.spanClassName ?? ""
        }`.trimEnd()}
        onClick={startEditing}
      >
        {text.length > 0 ? text : props.placeholder}
      </span>
    </span>
  );
};

export default EditableText;
