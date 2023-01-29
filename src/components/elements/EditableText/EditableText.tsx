import React, { useState, useEffect, useRef } from "react";

import styles from "./EditableText.module.css";

function useOutsideAlerter<T extends HTMLElement>(
  ref: React.RefObject<T>,
  action: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, action]);
}

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

  useOutsideAlerter(mainSpanRef, () => {
    setEditing(false);
  });

  const startEditing = () => {
    console.log("startEditing");
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
