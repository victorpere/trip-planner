import React from "react";
import { useTranslation } from "react-i18next";
import Overlay from "../elements/Overlay/Overlay";

type Props = {
  text: string;
  buttons: { label: string; action: () => void }[];
};

const ActionDialog = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Overlay>
      <>
        <div>{t(props.text)}</div>
        <div>
          {props.buttons.map((button, index) => (
            <button key={index} onClick={button.action}>{t(button.label)}</button>
          ))}
        </div>
      </>
    </Overlay>
  );
};

export default ActionDialog;
