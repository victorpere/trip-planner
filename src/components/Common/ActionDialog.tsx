import React, { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import Overlay from "../elements/Overlay/Overlay";

import styles from "./ActionDialog.module.css";

type Props = {
  text: string;
  textVars?: {};
  buttons: { label: string; action: () => void }[];
  className?: string;
  color?: string;
  type?: "warning" | "error";
};

const ActionDialog = (props: Props) => {
  const { t } = useTranslation();
  const style: CSSProperties = {
    backgroundColor: props.color,
  };

  const text = props.textVars ? t(props.text, props.textVars) : t(props.text);

  return (
    <Overlay
      className={`${props.className} ${props.type && styles[props.type]}`}
      style={style}
    >
      <>
        <div>{text}</div>
        <div>
          {props.buttons.map((button, index) => (
            <button key={index} onClick={button.action}>
              {t(button.label)}
            </button>
          ))}
        </div>
      </>
    </Overlay>
  );
};

export default ActionDialog;
