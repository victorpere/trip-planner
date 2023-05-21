import React, { useState, useRef } from "react";

import useClickOutside from "./useOutsideClick";

type Props = {
  key: string;
  editable: boolean;
  editing?: boolean;
  text?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  className?: string;
  inputClassName?: string;
  staticClassName?: string;
  onChange?: (key: string, text?: string) => void;
  onFinishedEditing?: (key: string, text?: string) => void;
};

const EditableText = (props: Props) => {
  const mainSpanRef = useRef<HTMLSpanElement>(null);

  const [editing, setEditing] = useState<boolean>(
    props.editable && (props.editing ?? false)
  );
  const [text, setText] = useState<string>(props.text ?? "");

  useClickOutside(mainSpanRef, () => {
    if (props.editable) {
      setEditing(false);
      //props.onFinishedEditing && props.onFinishedEditing(props.key, props.text);
    }
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
    <span ref={mainSpanRef} className={props.className}>
      <input
        hidden={!editing}
        className={props.inputClassName}
        type="text"
        placeholder={props.placeholder}
        value={text}
        onChange={changeTextHandler}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
      <span
        hidden={editing}
        className={props.staticClassName}
        onClick={startEditing}
      >
        {text.length > 0 ? text : props.placeholder}
      </span>
    </span>
  );
};

export default EditableText;
