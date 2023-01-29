import React, { useState } from "react";

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
  const [editing, setEditing] = useState<boolean>(
    props.editable && props.editing
  );
  const [text, setText] = useState<string | undefined>(props.text);

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

  if (editing) {
    return (
      <input
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
    );
  }

  return (
    <span
      className={`${styles["editable"]} ${props.className ?? ""} ${
        props.spanClassName ?? ""
      }`.trimEnd()}
      onClick={startEditing}
    >
      {text ?? props.placeholder}
    </span>
  );
};

export default EditableText;
