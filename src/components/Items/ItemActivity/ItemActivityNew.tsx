import React, { useState } from "react";
import { Activity } from "../../../models/Activity";
import Overlay from "../../elements/Overlay/Overlay";
import Card from "../../Cards/Card";
import { useTranslation } from "react-i18next";

type ItemActivityNewProps = {
  onCreate: (activity: Activity) => void;
  onCancel?: () => void;
};

const ItemActivityNew = (props: ItemActivityNewProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const createClickHandler = () => {
    if (name) {
      const activity: Activity = {
        name: name,
        type: "activity",
      };

      props.onCreate(activity);
    }
  };

  const cancelClickHandler = () => {
    props.onCancel && props.onCancel();
  };

  return (
    <Overlay>
      <Card>
        <div>new item</div>
        <div>
          <input type="text" value={name} onChange={nameChangeHandler}></input>
        </div>
        <div>
          <button onClick={createClickHandler}>{t("Create")}</button>
          <button onClick={cancelClickHandler}>{t("Cancel")}</button>
        </div>
      </Card>
    </Overlay>
  );
};

export default ItemActivityNew;
